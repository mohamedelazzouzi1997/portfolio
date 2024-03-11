# PostgreSQL

[`PostgreSQL`](https://www.postgresql.org/) is a powerful open-source relational database management system (RDBMS) known for its advanced features, extensibility, and standards compliance. PostgreSQL, often referred to as "Postgres," supports a wide range of data types, indexing options, and complex queries, making it suitable for various applications, from small projects to large enterprise systems.
<br/>

PostgreSQL follows the SQL standard and provides additional features, including support for JSON, XML, and spatial data. It has a robust security model, supports ACID (Atomicity, Consistency, Isolation, Durability) properties, and offers features like triggers, stored procedures, and views. PostgreSQL is widely used in mission-critical applications due to its reliability, extensibility, and strong community support.

<br/>

PostgreSQL is :

- open-source: Being open-source promotes transparency, community collaboration, and ease of access for developers.
- standards-compliant: Adheres to SQL standards and provides additional features, ensuring compatibility and flexibility.
- extensible: Supports the development of custom functions, operators, and data types, allowing for extensibility and customization.

<br/>

## Example

```ts
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(50) NOT NULL,
  email VARCHAR(100) NOT NULL
);

INSERT INTO users (username, email) VALUES
  ('john_doe', 'john@example.com'),
  ('jane_smith', 'jane@example.com');

SELECT * FROM users;

```

> PostgreSQL is a powerful open-source relational database management system known for its advanced features, standards compliance, and extensibility, widely used for various applications.
