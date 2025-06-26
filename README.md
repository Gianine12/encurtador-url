# Encurtador de URL com Multi-Tenant

Este projeto e uma API de encurtamento de URLs com autenticacao JWT e uma arquitetura de microservicois

O sistema e divido em 3 apps que sao:

- **Usuario**: Cadastro, Login, JWT e listagens de urls por Usuario
- **Empresa**: Cadastro de empresa e listagem de usuarios vinculados a esta empresa
- **Url**: Encurtamento da url, contagem de clicks

## Tecnologias

- NestJS
- TypeORM
- PostgreSQL
- Docker / Docker Compose
- JWT
- class-validator
- Microserviços HTTP

## Docker Compose

O docker-compose ele gerencia 3 microservicos e 3 Postgres que cada um pertence ao servico

# Variaveis de Ambiente

- DB_NAME
- DB_USER
- DB_PASSWORD
- DB_HOST
- SECRETKEY

# Subir o projeto

```
    docker-compose up --build
```

Para acessas os logs de um dos microservicos (usuario, empresa, url)

```
    docker-compose logs -f name_service

```

# Rotas

Acessando o endereco abaixo e possivel as rotas disponiveis no sitema em cada um dos servicos

- http://localhost:3000/swagger#/ **Usuario**
- http://localhost:3001/swagger#/ **Url**
- http://localhost:3002/swagger#/ **Empresa**
