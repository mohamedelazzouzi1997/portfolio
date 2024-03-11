# MySQL

[`MySQL`](https://www.mysql.com/) is an open-source relational database management system (RDBMS) that is widely used for building and managing databases. Developed by Oracle Corporation, MySQL is known for its reliability, performance, and ease of use. It supports SQL (Structured Query Language) for defining and manipulating data, making it a popular choice for various applications, from small websites to large-scale enterprise systems.
<br/>

MySQL offers features such as transactions, indexing, and replication, making it suitable for a wide range of use cases. It supports multiple storage engines, allowing developers to choose the one that best fits their needs, whether it's for performance optimization, ACID compliance, or other specific requirements.

<br/>

MySQL is :

- open-source: Being open-source allows developers to access and modify the source code, promoting transparency and community collaboration.
- scalable: Scales well for both small and large databases, with support for replication, clustering, and partitioning.
- versatile: Supports multiple storage engines and is compatible with various programming languages, making it suitable for diverse development environments.

<br/>

## Example

```ts
CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(50) NOT NULL,
  email VARCHAR(100) NOT NULL
);

INSERT INTO users (username, email) VALUES
  ('john_doe', 'john@example.com'),
  ('jane_smith', 'jane@example.com');

SELECT * FROM users;

```

> MySQL is an open-source relational database management system known for its reliability and versatility, widely used for building and managing databases in various applications.
