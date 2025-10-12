Olá, esse projeto será um BackEnd em Node.js que estou fazendo para uma aplicação em Flutter.

## Requisitos funcionais:
- [x] Se cadastrar;
- [x] Se autenticar;
- [ ] Obter as métricas de um perfil autenticado
- [ ] Obter o total mensal de um usuário
- [ ] Obter valores das faturas, total, a pagar e não pagos
- [ ] Mudar a senha caso esqueça
- [ ] Obter dados de um usuário autenticado

## Regras de negócio
- [ ] O usuário não pode ver dados de outro usuário
- [ ] O usuário não pode editar dados de outro usuário

## Requisitos não funcionais
- [ ] A senha do usuário precisa estar criptografada;
- [ ] Os dados da aplicação precisam estar persistidos em um banco de dados utilizando o Prisma
- [ ] O usuário deve ser identificado por JWT

## Observações
1. Baixar o container do Postgres
```
docker pull bitnami/postgresql
```
2. Rodar o container
```
docker run --name postgres -e POSTGRESQL_PASSWORD=[PASSWORD] -p 5432:5432 bitnami/postgresql
```
3. Dentro do container rodar:
```
psql -U postgres
CREATE_DATABASE [DATABASE_NAME]
```
4. Prisma
```
npx prisma migrate dev
```