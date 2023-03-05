import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Employee from 'App/Models/Employee'

export default class EmployeesController {

  public async index() {
    const employee = await Employee.all()

    return {
      data: employee,
    }
  }

  public async store({request, response}: HttpContextContract) {
    const body = request.body()

    const employee = await Employee.create(body)
    response.status(201)

    return {
      message: "Funcionário(a) cadastrado com sucesso!",
      data: employee,
    }

  }

  public async show({ params }:HttpContextContract) {
    const employee = await Employee.findOrFail(params.id)

    return {
      data: employee
    }
  }

  public async destroy({ params }:HttpContextContract) {
    const employee = await Employee.findOrFail(params.id)

    await employee.delete()

    return {
      message: "Funcionário(a) removido com sucesso!",
      data: employee
    }
  }

  public async update({params, request}: HttpContextContract) {
    const body = request.body()

    const employee = await Employee.findOrFail(params.id)
    
    employee.first_name = body.first_name
    employee.last_name = body.last_name
    employee.is_employee = body.is_employee
    employee.role = body.role

    employee.save()

    return {
      message: "Funcionário(a) atualizado com sucesso!",
      data: employee,
    }

  }
}
