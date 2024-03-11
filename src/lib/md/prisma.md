# Prisma

[`Prisma `](https://www.prisma.io/) is a modern, open-source database toolkit and Object-Relational Mapping (ORM) tool for TypeScript and Node.js applications. Prisma simplifies database access by providing a type-safe and auto-generated query builder. It supports multiple databases, including MySQL, PostgreSQL, SQLite, and SQL Server.
<br/>

Prisma's key features include a powerful query builder, automatic schema migrations, and type-safe database access using TypeScript. It provides a declarative and intuitive API for database operations, making it easy for developers to interact with databases without writing raw SQL queries. Prisma Client, the generated database client, ensures type safety and autocompletion for queries.

<br/>

Prisma is :

- type-safe: Utilizes TypeScript to provide type safety and autocompletion for database queries.
- declarative: Offers a declarative API for defining database models and relationships.
- migrate: Supports automatic schema migrations, making it easy to evolve the database schema with code changes.

<br/>

## Example

```ts
model User {
  id    Int     @id @default(autoincrement())
  name  String
  email String  @unique
  posts Post[]
}

model Post {
  id    Int    @id @default(autoincrement())
  title String
  body  String
  userId Int
  user  User   @relation(fields: [userId], references: [id])
}

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const newUser = await prisma.user.create({
  data: {
    name: 'John Doe',
    email: 'john@example.com',
    posts: {
      create: { title: 'My first post', body: 'Hello, Prisma!' },
    },
  },
});

const userWithPosts = await prisma.user.findUnique({
  where: { id: newUser.id },
  include: { posts: true },
});

console.log(userWithPosts);

```

> Prisma is a modern database toolkit and ORM for TypeScript and Node.js, providing a type-safe query builder, automatic migrations, and a declarative API for database operations.
