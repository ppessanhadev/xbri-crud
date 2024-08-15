### XBRI CRUD

Essa aplicação tem como objetivo crud de produtos gerais.

Ela foi desenvolvida como um monorepo, ou seja, possuí backend e frontend em conjunto.

## Overview da aplicação

Para o desenvolvimento geral, utilizei as principais ferramentas e conceitos:
- [NestJS](https://nestjs.com) para o desenvolvimento backend
- [Next 14](https://nextjs.org/) para o desenvolvimento frontend
- Backend foi projetado com arquitetura modular e conceitos de SOLID e Clean Code visando o crescimento exponencial da aplicação
- Pode ser rodada separadamente com [pnpm](https://pnpm.io)

## Backend REST API

O Backend foi desenvolvido com [NestJS](https://nestjs.com), toda a lógica da aplicação está centralizada nele, sendo resposável por listar, criar, alterar e deletar os produtos.

**Tecnologias utilizadas**
- Typescript
- [Prisma ORM](https://www.prisma.io) para simplificar a comunicação com o banco de dados, criação de models e tabelas
- [@nestjs/swagger](https://docs.nestjs.com/openapi/introduction) para documentar as rotas da aplicação
- [nestjs/zod](https://www.npmjs.com/package/nestjs-zod) para validação de campos de campos e integração conjunto com swagger para documentação
- [Docker](https://www.docker.com) para isolar a aplicação e rodar em ambiente de produção
- Lint com [ESlint](https://eslint.org/) + [Prettier](https://prettier.io/) para manter a consistencia do código

**Rotas**

Os dados que devem ser enviados e são opcionais podem ser vistos a partir da documentação gerada pelo Swagger em `/api/docs`

**Como rodar o projeto**

> **OBS**: As aplicações foram desenvolvidas na versão v20 do node

A partir da raiz do projeto em seu terminal, siga os próximos passos para rodar a API localmente:

**Rodando localmente com pnpm**

O projeto em si foi desenvolvido utilizado o gerenciador de pacote pnpm, para instalar, no seu terminal execute o comando `npm i -g pnpm`, e siga os próximos passos:

1. `pnpm i`
2. `pnpm -F=backend start:dev`

>> A aplicação estará rodando em: http://localhost:3741

## Frontend Next 14 (React)

O Frontend foi construído usando [Next 14](https://nextjs.org/), sendo responsável por consumir o backend, exigindo menos lógica possível, se importando apenas com o conteúdo visual da aplicação.

**Tecnologias utilizadas**

- Typescript
- Lint com [ESlint](https://eslint.org) para consistencia do código
- [Tailwind](https://tailwindcss.com) para estilização das páginas de forma simplificada
- [Shadcn/ui](https://ui.shadcn.com/) para componentes pre-personalizados
- [React hook form](https://www.react-hook-form.com/) + [zod](https://zod.dev/) para validação de campos de forma automatizada dos formulários

**Rodando localmente com pnpm**

**OBS**: As aplicações foram desenvolvidas na versão v18 do node, então, caso não rode em um container por docker é necessário que mude sua versão.

O projeto em si foi desenvolvido utilizado o gerenciador de pacote pnpm, para instalar, no seu terminal execute o comando `npm i -g pnpm`, e siga os próximos passos:

1. `pnpm i`
2. `pnpm -F=frontend dev`


>> A aplicação estará rodando em http://localhost:3000 caso não esteja rodando a api, caso contrario estará rodando em http://localhost:3001
