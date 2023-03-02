O projeto em questão já está pronto para a execução, incluindo conexão com banco de dados

O objetivo da atividade é rodar o projeto localmente seguindo os passos:

- criar um arquivo .env idêntico ao .env.exemplo
- executar os comandos `~ yarn; yarn dev`

- compreender a estrutura das tabelas através das proprias migrations e models existentes
- criar uma nova entidade (migration e model) para representar um employee (colunas da tabela são de livre escolha)
- criar um novo controller que gerencie o crud de employees
- criar os endpoints para acessar as funcionalidades da api

critérios:

- criação, listagem e deleção de employees funcionando corretamente
- relação entre as tabelas de users e employees funcionando corretamente

extra:

- gestão dos roles adequada nos models e controllers
- controle de acesso dos endpoints permitindo acesso apenas pelo usuário admin (dados de login no arquivo .env)
- incrementos adicionais são sempre bem vindos
