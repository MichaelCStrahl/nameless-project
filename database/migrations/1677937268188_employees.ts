import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Employees extends BaseSchema {
  protected tableName = 'employees'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('user_id').unsigned().index()
      table.foreign('user_id').references('users.id').onDelete('cascade')
      table.string('first_name', 255).nullable()
      table.string('last_name', 255).nullable()
      table.boolean('is_employee').defaultTo(false).notNullable()
      table.integer('role').defaultTo(0)

      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
