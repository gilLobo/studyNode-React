## Libs externas
    1. Express: Framework que fornece mecanismos para :
       1. Gerencia as requisições de diferentes requisições e rotas e URLs.
       2. Combinar com mecanismos de renderização de "view" para gerar respostas inserindo dados em modelos.
       3. Definir as configurações comuns da aplicação web, como a porta a ser usada para conexão e a localização dos modelos que são usados para renderizar a resposta.
       4. Adicionar em qualquer ponto da requisição um "middleware" para interceptar processar ou pré-processar e tratamentar à mesma.
   
    2. Nodemon: Ferramenta instalada como depencia de desenvolvimento para monitorar mudanças no arquivo e atualizar o server automaticamente.

    3. Knex: Query build (Escreve consulta SQL em JS)

    4. Celebrate: Lib para auxiliar na realização das validações.

    5. Jest: Lib para Testes;

    6. Supertest: Lib para fazer chamadas nas rotas das APIs voltadas para testes.
   
## Sobre o database
    - Passo a passo para criar/alterar tabelas no DB utilizando as migrations com knex
    1. $ npx knex init -> Cria o arquivo de configuração para o BD.
    2. No arquivo de configuração knexfile.js adiciona ao json a migrations. 
    Ex: development: {
            client: 'sqlite3',
            connection: {
                filename: './src/database/db.sqlite'
            },
            migrations: {
                directory: './src/database/migrations'
            },
            useNullAsDefault: true,
        },
    3. $ npx knex migrate:make create_ongs -> Criar a migration
        1. Na função up da migrations adicionar o script para criar/alterar tabela.
        2. Na função down adiciona o script para desfazer caso de algum erro na up.

    4. Utils comandos knex:
        1. $ npx knex migrate:latest -> Executa a migration
        2. $ npx knex migrate:rollback -> desfaz a ultima migration
        3. $ npx knex migrate:status -> listar as migration pendentes
    5. 
