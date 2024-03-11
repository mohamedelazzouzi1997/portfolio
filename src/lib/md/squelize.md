# Sequelize

[`Sequelize`](https://sequelize.org/) is a powerful Object-Relational Mapping (ORM) library for Node.js, supporting various SQL databases such as PostgreSQL, MySQL, SQLite, and MSSQL. Sequelize simplifies database interactions by providing a straightforward way to define models, perform queries, and manage database relationships using JavaScript or TypeScript.
<br/>

Sequelize supports both promise-based and async/await patterns, making it easy to work with asynchronous operations. It includes features like migrations, associations, and hooks, allowing developers to manage database schemas, model relationships, and execute custom logic during database operations.

<br/>

Sequelize is :

- flexible: Works with various SQL databases, allowing developers to switch databases without significant code changes.
- feature-rich: Provides comprehensive features such as migrations, associations, and hooks to manage database operations.
- well-documented: Has extensive documentation and a strong community, making it easy for developers to get started and find support.

<br/>

## Example

```ts
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

const User = sequelize.define('User', {
	name: {
		type: DataTypes.STRING,
		allowNull: false
	},
	email: {
		type: DataTypes.STRING,
		allowNull: false,
		unique: true
	}
});

sequelize
	.sync()
	.then(() => {
		return User.create({
			name: 'John Doe',
			email: 'john@example.com'
		});
	})
	.then((user) => {
		return User.findOne({ where: { id: user.id } });
	})
	.then((user) => {
		console.log(user.toJSON());
	})
	.catch((error) => {
		console.error('Error:', error.message);
	});
```

> Sequelize is a powerful ORM for Node.js that simplifies database interactions, supporting various SQL databases and providing features like migrations, associations, and hooks.
