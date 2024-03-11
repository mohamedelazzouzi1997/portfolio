# MongoDB

[`MongoDB`](https://www.mongodb.com/) is a popular NoSQL database management system that provides a flexible, scalable, and document-oriented approach to storing and retrieving data. Developed by MongoDB Inc., MongoDB is designed to handle large amounts of unstructured or semi-structured data, making it suitable for a wide range of applications, including web development, mobile apps, and analytics.
<br/>

MongoDB stores data in a flexible, JSON-like format called BSON (Binary JSON), which allows developers to represent complex data structures and relationships. It supports dynamic schema, making it easy to adapt to evolving application requirements. MongoDB is known for its horizontal scalability, automatic sharding, and comprehensive query capabilities.

<br/>

MongoDB is :

- NoSQL: Adopts a non-relational approach, providing flexibility in data modeling and storage.
- document-oriented: Stores data in BSON documents, allowing for rich and nested data structures.
- scalable: Scales horizontally to handle large volumes of data by distributing it across multiple servers.

<br/>

## Example

```ts
const { MongoClient } = require('mongodb');

const uri =
	'mongodb+srv://<username>:<password>@cluster0.mongodb.net/test?retryWrites=true&w=majority';

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function run() {
	try {
		await client.connect();

		const database = client.db('mydatabase');
		const collection = database.collection('mycollection');

		await collection.insertOne({ name: 'John Doe', age: 30, email: 'john@example.com' });

		const result = await collection.find({ name: 'John Doe' }).toArray();
		console.log(result);
	} finally {
		await client.close();
	}
}

run();
```

> MongoDB is a NoSQL document-oriented database management system known for its flexibility and scalability, widely used for handling unstructured or semi-structured data in various applications.
