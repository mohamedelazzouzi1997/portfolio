import{A as e}from"./UIcon.9ab05426.js";const p=`# GO

[\`GO\`](https://go.dev/) is an open-source programming language designed at Google by Robert Griesemer, Rob Pike, and Ken Thompson. Known for its simplicity, efficiency, and strong support for concurrency, Go has gained popularity in the development community. It emphasizes clean and readable code, making it an excellent choice for building scalable and maintainable applications.
<br/>

Go is not just a traditional interpreted language; it compiles directly to machine code, resulting in fast and efficient performance. The language is statically typed, but it feels lightweight and allows for rapid development. Go also comes with a built-in garbage collector, making memory management more straightforward for developers.

<br/>

GO is :

- compiled: Go's compilation process produces a standalone executable, eliminating the need for external runtime dependencies. This results in efficient and portable binaries.
- concise: Write clear and concise code with a focus on simplicity. Go encourages good coding practices and enforces a formatting style through the "gofmt" tool.
- complete: Go includes a standard library that covers a wide range of functionalities, from handling HTTP requests to working with databases. It provides essential tools for building robust and scalable applications without relying heavily on external packages.

<br/>

## Example

\`\`\`ts
package main

import "fmt"

func main() {
    count := 1
    doubled := count * 2

    fmt.Printf("%d * 2 = %d\\n", count, doubled)

    count = count + 1
}
\`\`\`

> Go is an open-source programming language designed at Google, known for its simplicity, efficiency, and strong support for concurrency.
`,u=`# TS

[\`TS\`](https://www.typescriptlang.org/) is a superset of JavaScript that adds static typing to the language. Developed by Microsoft, TypeScript provides developers with optional static types, making it easier to catch errors early in the development process. TypeScript code is transpiled into JavaScript, ensuring compatibility with all JavaScript runtimes and environments.
<br/>

TypeScript enhances the developer experience by introducing features like interfaces, enums, and advanced type-checking capabilities. It integrates seamlessly with modern development workflows and popular frameworks, such as React and Angular.

<br/>

TypeScript is :

- typed: Enjoy the benefits of static typing, enabling better code quality, improved tooling support, and early error detection during development.
- scalable: TypeScript scales with your project, offering a structured approach to building large and maintainable applications. It accommodates both small scripts and enterprise-level applications.
- modern: Leverage the latest ECMAScript features while also taking advantage of TypeScript-specific features. It aligns with the evolution of JavaScript, providing developers with modern language features.

<br/>

## Example

\`\`\`ts
interface CounterProps {
	count: number;
}

class Counter {
	private count: number;

	constructor(initialCount: number) {
		this.count = initialCount;
	}

	increment(): void {
		this.count++;
	}

	display(): void {
		console.log(\`Count: \${this.count}\`);
	}
}

// Example usage
const counter = new Counter(1);
counter.increment();
counter.display();
\`\`\`

> TypeScript is a superset of JavaScript that adds static typing to the language, enhancing the developer experience with features like interfaces, enums, and advanced type-checking capabilities.
`,m=`# PHP

[\`PHP\`](https://www.php.net/)is a server-side scripting language widely used for web development. Initially created by Rasmus Lerdorf in 1994, PHP stands for "Hypertext Preprocessor" and is embedded within HTML code to generate dynamic web pages. It is open-source and has a large, active community, contributing to its extensive ecosystem of libraries and frameworks.
<br/>
PHP is primarily focused on web development, offering simplicity and flexibility for building websites and web applications. It supports various databases, has powerful string manipulation functions, and provides seamless integration with HTML.

<br/>

PHP is :

- interpreted: PHP code is executed on the server, generating dynamic content that is sent to the client's browser. This allows developers to embed PHP directly into HTML.
- versatile: Well-suited for a wide range of web development tasks, from small scripts to large-scale applications. PHP supports multiple platforms and can be easily integrated with databases like MySQL.
- community-driven: With a large and active community, PHP benefits from continuous improvements, security updates, and a vast ecosystem of third-party libraries and frameworks.

<br/>

## Example

\`\`\`ts
<?php
$count = 1;
$doubled = $count * 2;

echo "$count * 2 = $doubled";

$count = $count + 1;
?>

\`\`\`

> PHP is a server-side scripting language widely used for web development, offering simplicity and flexibility for building dynamic web pages and applications.
`,g=`# JS

[\`JS\`](https://www.javascript.com/) is a versatile and widely-used programming language that powers dynamic content on the web. Developed by Brendan Eich in 1995, JavaScript is an essential part of web development, enabling interactive and responsive user experiences. It is a high-level, interpreted language that can be executed in web browsers, making it a client-side scripting language.
<br/>

JavaScript, often abbreviated as JS, has evolved over the years and is now used not only for front-end development but also for server-side development (Node.js). It supports a wide range of frameworks and libraries, such as React, Angular, and Vue.js, making it a powerful tool for building modern web applications.

<br/>

JavaScript is :

- interpreted: Executed directly by web browsers, enabling dynamic changes to web pages and interactions with users.
- versatile: Used for both client-side and server-side development, making it a key language for full-stack development.
- ubiquitous: Supported by all major web browsers, ensuring compatibility and accessibility for a vast audience.

<br/>

## Example

\`\`\`ts
let count = 1;
let doubled = count * 2;

console.log(\`\${count} * 2 = \${doubled}\`);

count = count + 1;
\`\`\`

> JavaScript is a versatile programming language that powers dynamic content on the web, allowing for interactive and responsive user experiences.
`,f=`# CSS (Cascading Style Sheets)

[\`CSS\`](https://www.w3.org/Style/CSS/Overview.en.html) is a styling language used to describe the presentation of a document written in HTML. Developed as a separate technology to HTML, CSS allows developers to control the layout, appearance, and style of web pages, ensuring a consistent and visually appealing user experience. CSS is essential for creating responsive and well-designed websites.
<br/>

CSS operates on a "cascading" principle, where styles can be defined at different levels and cascade down to affect elements in a hierarchical manner. It offers a wide range of styling options, including colors, fonts, spacing, and animations, providing the tools necessary to create modern and visually engaging web interfaces.

<br/>

CSS is :

- styling-focused: Designed specifically for styling HTML documents, allowing developers to control the visual presentation of web content.
- flexible: Supports a variety of layout techniques, including flexbox and grid, enabling the creation of responsive and adaptive designs.
- powerful: Provides a wide range of selectors and properties for styling, allowing for intricate and detailed customization.

<br/>

## Example

\`\`\`ts
body {
    font-family: 'Arial', sans-serif;
    background-color: #f0f0f0;
    color: #333;
}

.container {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
}

h1 {
    color: #0077cc;
}

p {
    line-height: 1.5;
}
\`\`\`

> CSS is a styling language that controls the layout and appearance of HTML documents, allowing developers to create visually appealing and consistent web designs.
`,b=`# HTML (Hypertext Markup Language)

[\`HTML\`](https://html.com/) is the standard markup language used to structure and present content on the World Wide Web. Developed by Tim Berners-Lee in the early 1990s, HTML provides a set of elements or tags that define the structure of a web page, such as headings, paragraphs, links, images, and more. It serves as the backbone of web development, working in conjunction with CSS and JavaScript to create interactive and visually appealing websites.
<br/>

HTML documents are composed of a nested structure of elements, forming a tree-like hierarchy. Each element carries semantic meaning, contributing to the accessibility and SEO (Search Engine Optimization) of a web page. HTML5, the latest version of HTML, introduces new elements and attributes that enhance the capabilities of web development.

<br/>

HTML is :

- semantic: Uses descriptive tags to convey the meaning and structure of content, making it accessible and search engine-friendly.
- platform-independent: Renders consistently across different browsers and devices, providing a uniform experience for users.
- foundational: Serves as the foundation for web development, facilitating the integration of styles (CSS) and interactivity (JavaScript).

<br/>

## Example

\`\`\`ts
<!-- Define a simple HTML document -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My First HTML Page</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>

    <header>
        <h1>Welcome to My Website</h1>
    </header>

    <nav>
        <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
    </nav>

    <section>
        <h2>About Us</h2>
        <p>This is a brief description of our website.</p>
    </section>

    <footer>
        <p>&copy; 2024 My Website. All rights reserved.</p>
    </footer>

</body>
</html>

\`\`\`

> HTML is the standard markup language for creating the structure and content of web pages, forming the foundation of web development.
`,h=`# Sass (Syntactically Awesome Stylesheets)

[\`Sass\`](https://sass-lang.com/) is a preprocessor scripting language that is interpreted or compiled into Cascading Style Sheets (CSS). SassScript is the scripting language itself. It extends CSS by providing mechanisms such as variables, nested rules, and mixins, making stylesheets more maintainable and easier to write.
<br/>

Sass is compatible with all versions of CSS and allows for the use of both the indented syntax (Sass) and the more familiar CSS-style syntax. It provides features like variables, nesting, partials, and imports, allowing developers to create modular and efficient stylesheets.

<br/>

Sass is :

- modular: Breaks down stylesheets into modular components using features like partials and imports, making the codebase more maintainable.
- dynamic: Enables the use of variables, functions, and expressions, allowing for dynamic and reusable styles.
- powerful: Extends the capabilities of CSS with features like mixins, inheritance, and control directives, providing advanced styling options.

<br/>

## Example

\`\`\`ts
$primary-color: #0077cc;

body {
  font-family: 'Arial', sans-serif;
  background-color: #f0f0f0;
  color: #333;
}

.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
}

h1 {
  color: $primary-color;
}

p {
  line-height: 1.5;
}

\`\`\`

> Sass is a preprocessor scripting language that extends CSS with features like variables, nesting, and mixins, providing a more modular and maintainable way to write styles.
`,y=`# Laravel

[\`Laravel\`](https://laravel.com) is a powerful and elegant PHP web application framework designed for developers who value clean, expressive, and efficient code. Created by Taylor Otwell, Laravel follows the Model-View-Controller (MVC) architectural pattern and provides a wide range of features to streamline the development process.
<br/>

Laravel emphasizes simplicity and readability, making it an ideal choice for building modern web applications. It includes a robust ORM (Object-Relational Mapping) called Eloquent, a powerful template engine called Blade, and a convenient command-line interface called Artisan. Laravel also incorporates Composer for dependency management and integrates seamlessly with front-end tools like Laravel Mix for asset compilation.

<br/>

Laravel is :

- expressive: Promotes expressive syntax and conventions, enabling developers to write clean and readable code.
- feature-rich: Comes with a variety of built-in tools and libraries, including Eloquent ORM, Blade templating engine, middleware, and more.
- modern: Stays up-to-date with the latest PHP features and best practices, providing developers with a modern and enjoyable development experience.

<br/>

## Example

\`\`\`ts
<?php

// Define a simple Laravel route and controller
use Illuminate\\Support\\Facades\\Route;

Route::get('/welcome', 'WelcomeController@index');

// WelcomeController.php
class WelcomeController extends Controller
{
    public function index()
    {
        $message = 'Welcome to Laravel!';
        return view('welcome', compact('message'));
    }
}

// welcome.blade.php
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Laravel Welcome Page</title>
</head>
<body>

    <h1>{{ $message }}</h1>

</body>
</html>

\`\`\`

> Laravel is a powerful PHP web application framework that prioritizes clean and expressive code, making it a popular choice for modern web development.
`,v=`# Express.js

[\`Express.js\`](https://expressjs.com) is a minimal and flexible Node.js web application framework that provides a robust set of features for building web and mobile applications. It simplifies the process of building web servers and APIs, allowing developers to focus on creating scalable and efficient applications. Express.js is widely used in the Node.js ecosystem and is known for its simplicity, flexibility, and performance.
<br/>

Express.js follows the middleware pattern, allowing developers to define a series of functions that have access to the request and response objects, making it easy to handle various aspects of the application's functionality. It also integrates seamlessly with templating engines, databases, and other Node.js modules, making it a versatile choice for web development.

<br/>

ExpressJs is :

- minimalist: Provides a minimal and unopinionated structure, allowing developers to choose and integrate the tools and libraries that best suit their needs.
- flexible: Offers a range of features, including routing, middleware support, template engines, and more, while leaving room for customization.
- performant: Known for its speed and efficiency, making it an excellent choice for building scalable and high-performance web applications.

<br/>

## Example

\`\`\`ts
const express = require('express');
const app = express();
const port = 3000;

// Define a route and handle the request
app.get('/hello', (req, res) => {
	res.send('Hello, Express.js!');
});

// Start the server
app.listen(port, () => {
	console.log(\`Express.js app listening at http://localhost:\${port}\`);
});
\`\`\`

> Express.js is a minimalist and flexible Node.js web application framework, widely used for building scalable and efficient web servers and APIs.
`,w=`# Angular

[\`Angular\`](https://angular.io/docs) is a TypeScript-based open-source front-end web application framework maintained by Google and a community of developers. It is part of the MEAN (MongoDB, Express.js, Angular, Node.js) stack and is widely used for building single-page applications (SPAs) and dynamic web applications. Angular provides a comprehensive set of tools and features to simplify the development process and enhance the scalability and maintainability of projects.
<br/>

Angular follows a component-based architecture, where applications are composed of modular components that encapsulate the logic, template, and styling. It includes features such as two-way data binding, dependency injection, and a powerful command-line interface (CLI) for scaffolding and building projects. Angular also integrates seamlessly with RxJS for handling asynchronous operations.

<br/>

Angular is :

- modular: Organizes applications into reusable and maintainable components, promoting a modular and scalable architecture.
- declarative: Uses a declarative approach to building UIs, making it easier to reason about and test the application.
- full-featured: Provides a rich set of tools and libraries for features like routing, forms, HTTP client, animations, and more.

<br/>

## Example

\`\`\`ts
import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	template: \`
		<h1>{{ title }}</h1>
		<p>Welcome to Angular!</p>
	\`,
	styles: [
		\`
			h1 {
				color: #0077cc;
			}
		\`
	]
})
export class AppComponent {
	title = 'My Angular App';
}
\`\`\`

> Angular is a TypeScript-based front-end web application framework that promotes a component-based architecture for building scalable and maintainable single-page applications.
`,S=`# Vue.js

[\`Vue.js\`](https://vuejs.org/) is a progressive JavaScript framework used for building user interfaces. Developed by Evan You, Vue.js is designed from the ground up to be incrementally adoptable, making it easy to integrate into existing projects. It focuses on the view layer of an application and is often referred to as a "progressive framework" because of its versatility and adaptability.
<br/>

Vue.js enables developers to build reactive and dynamic web interfaces through a component-based architecture. It provides features like two-way data binding, a flexible directive system, and a reactive data-binding system. Vue.js is known for its simplicity, ease of integration, and efficient performance.

<br/>

Vue.js is :

- progressive: Can be adopted incrementally, allowing developers to use as much or as little of the framework as needed.
- reactive: Utilizes a reactive data-binding system, making it easy to create dynamic and responsive user interfaces.
- component-based: Organizes applications into modular components, promoting code reuse and maintainability.

<br/>

## Example

\`\`\`ts
<template>
  <div>
    <h1>{{ title }}</h1>
    <p>{{ message }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: 'My Vue.js App',
      message: 'Welcome to Vue.js!'
    };
  }
};
<\/script>

<style>
h1 {
  color: #42b983;
}
</style>

\`\`\`

> Vue.js is a progressive JavaScript framework for building user interfaces, known for its simplicity, adaptability, and reactive data-binding system.
`,k=`# React Native

[\`React Native\`](https://reactnative.dev/) is an open-source framework for building mobile applications using JavaScript and React. Developed by Facebook, React Native allows developers to create native-like experiences for iOS and Android platforms with a single codebase. It leverages the React library, enabling developers to use a familiar declarative style to build user interfaces for mobile apps.
<br/>

React Native components map directly to native UI components, ensuring high performance and a native look and feel. It supports hot-reloading, allowing developers to see the changes in real-time without rebuilding the entire application. React Native also provides a rich ecosystem of libraries and tools, making it a popular choice for cross-platform mobile development.

<br/>

React Native is :

- cross-platform: Allows for the development of both iOS and Android applications with a single codebase, reducing development time and effort.
- declarative: Utilizes a declarative programming style with React components, making it easy to understand and maintain the code.
- performant: Renders native UI components, resulting in high performance and a seamless user experience.

<br/>

## Example

\`\`\`ts
import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

const App = () => {
	const [count, setCount] = useState(0);

	return (
		<View>
			<Text>{\`Count: \${count}\`}</Text>
			<Button title="Increment" onPress={() => setCount(count + 1)} />
		</View>
	);
};

export default App;
\`\`\`

> React Native is an open-source framework for building cross-platform mobile applications using JavaScript and React, providing a native-like experience for both iOS and Android.
`,x=`# React.js

[\`React\`](https://react.dev/) is an open-source JavaScript library for building user interfaces, developed and maintained by Facebook. It is widely used for creating interactive and dynamic web applications with a focus on component-based architecture. React allows developers to build reusable UI components that efficiently update and render in response to data changes.
<br/>

React utilizes a virtual DOM (Document Object Model) to optimize rendering performance and provide a seamless user experience. It supports a unidirectional data flow, making it easy to manage state and handle complex UI updates. React can be used in conjunction with other libraries or frameworks, or as the core library in a full-stack JavaScript application.

<br/>

React.js is :

- component-based: Organizes UIs into modular and reusable components, promoting a clean and maintainable codebase.
- declarative: Uses a declarative approach to building UIs, making it easier to understand and predict the application's behavior.
- efficient: Optimizes rendering through the virtual DOM, ensuring high-performance applications.

<br/>

## Example

\`\`\`ts
import React, { useState } from 'react';

const App = () => {
	const [count, setCount] = useState(0);

	return (
		<div>
			<h1>React Example</h1>
			<p>{\`Count: \${count}\`}</p>
			<button onClick={() => setCount(count + 1)}>Increment</button>
		</div>
	);
};

export default App;
\`\`\`

>     React is an open-source JavaScript library for building interactive user interfaces, known for its component-based architecture and efficient rendering through the virtual DOM.
`,C=`# Tailwind CSS

[\`Tailwind CSS\`](https://tailwindcss.com) is a utility-first CSS framework that provides a set of low-level utility classes to build modern and responsive user interfaces. Developed by Adam Wathan, Jonathan Reinink, David Hemphill, and Steve Schoger, Tailwind CSS enables developers to rapidly create well-designed and consistent UIs without the need for writing custom CSS styles.
<br/>

Tailwind CSS follows a utility-first approach, where styles are applied directly in the HTML markup using pre-defined utility classes. This approach allows for quick prototyping, easy customization, and consistent styling across projects. Tailwind also provides tools for customization, allowing developers to configure and extend the default utility classes to suit their project's design requirements.

<br/>

Tailwind CSS is :

- utility-first: Provides a comprehensive set of utility classes for styling directly in the HTML, promoting a fast and consistent development workflow.
- configurable: Offers a customizable configuration file, allowing developers to tailor the framework to meet specific design needs.
- responsive: Includes built-in responsive design classes to create mobile-friendly and adaptive layouts.

<br/>

## Example

\`\`\`ts
<div class="flex justify-center items-center h-screen bg-gray-200">
	<div class="p-6 max-w-sm bg-white rounded shadow-md">
		<h1 class="text-xl font-bold text-gray-800">Tailwind CSS Example</h1>
		<p class="mt-2 text-gray-600">Build modern UIs with ease using Tailwind CSS.</p>
		<button class="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
			Get Started
		</button>
	</div>
</div>
\`\`\`

> Tailwind CSS is a utility-first CSS framework that provides a set of low-level utility classes for rapid and consistent UI development.
`,P=`# Bootstrap

[\`Bootstrap\`](https://getbootstrap.com/) is a popular open-source front-end framework developed by Twitter. It provides a set of pre-designed components, styles, and utilities to streamline the process of building responsive and visually appealing websites and web applications. Bootstrap is built on HTML, CSS, and JavaScript, making it easy to use for both beginners and experienced developers.
<br/>

Bootstrap's components include navigation bars, modals, forms, buttons, and more, all styled with a consistent and modern design. It also includes a responsive grid system that facilitates the creation of layouts that adapt to various screen sizes. Bootstrap's JavaScript plugins enhance the user experience with features such as carousels, tooltips, and popovers.

<br/>

Bootstrap is :

- responsive: Includes a responsive grid system and components, ensuring optimal viewing and interaction on various devices.
- customizable: Offers options for customization through variables, themes, and a wide range of utility classes.
- comprehensive: Provides a comprehensive set of pre-designed components and styles, reducing the need for custom CSS and JavaScript.

<br/>

## Example

\`\`\`ts
<!-- Use Bootstrap classes directly in HTML -->
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
  <title>Bootstrap Example</title>
</head>
<body>

  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Bootstrap</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Features</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <div class="container mt-4">
    <h1>Welcome to Bootstrap!</h1>
    <p>Build responsive and modern web applications with ease using Bootstrap.</p>
    <button class="btn btn-primary">Get Started</button>
  </div>

  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"><\/script>
</body>
</html>

\`\`\`

>     Bootstrap is a popular front-end framework that provides a set of pre-designed components and styles for building responsive and visually appealing web applications.
`,L=`# jQuery

[\`jQuery\`](https://jquery.com/) is a fast, lightweight, and feature-rich JavaScript library designed to simplify front-end web development. Created by John Resig, jQuery abstracts many common tasks, such as DOM manipulation, event handling, and AJAX requests, into a simplified API. It enables developers to write less code and achieve more with cross-browser compatibility.
<br/>

jQuery is known for its concise syntax and ease of use. It simplifies tasks that might be complex and verbose in raw JavaScript, making it a popular choice for web developers. Although newer technologies like React and Vue have gained popularity, jQuery remains widely used, especially in legacy projects.

<br/>

jQuery is :

- lightweight: Provides a small and efficient library that can be easily included in web projects.
- cross-browser compatible: Abstracts away differences between browsers, ensuring consistent behavior across various platforms.
- feature-rich: Offers a wide range of utilities for DOM manipulation, event handling, animations, and AJAX requests.

<br/>

## Example

\`\`\`ts
<script src="https://code.jquery.com/jquery-3.6.0.min.js"><\/script>

<!-- Use jQuery for DOM manipulation and event handling -->
<script>
  $(document).ready(function() {
    // Handle a button click event
    $('#myButton').click(function() {
      // Toggle the visibility of a paragraph
      $('#myParagraph').toggle();
    });
  });
<\/script>

<button id="myButton">Toggle Paragraph</button>
<p id="myParagraph">This is a hidden paragraph.</p>

\`\`\`

> jQuery is a fast and lightweight JavaScript library that simplifies DOM manipulation, event handling, and AJAX requests, providing a concise and efficient way to develop interactive web applications.
`,T=`# MySQL

[\`MySQL\`](https://www.mysql.com/) is an open-source relational database management system (RDBMS) that is widely used for building and managing databases. Developed by Oracle Corporation, MySQL is known for its reliability, performance, and ease of use. It supports SQL (Structured Query Language) for defining and manipulating data, making it a popular choice for various applications, from small websites to large-scale enterprise systems.
<br/>

MySQL offers features such as transactions, indexing, and replication, making it suitable for a wide range of use cases. It supports multiple storage engines, allowing developers to choose the one that best fits their needs, whether it's for performance optimization, ACID compliance, or other specific requirements.

<br/>

MySQL is :

- open-source: Being open-source allows developers to access and modify the source code, promoting transparency and community collaboration.
- scalable: Scales well for both small and large databases, with support for replication, clustering, and partitioning.
- versatile: Supports multiple storage engines and is compatible with various programming languages, making it suitable for diverse development environments.

<br/>

## Example

\`\`\`ts
CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(50) NOT NULL,
  email VARCHAR(100) NOT NULL
);

INSERT INTO users (username, email) VALUES
  ('john_doe', 'john@example.com'),
  ('jane_smith', 'jane@example.com');

SELECT * FROM users;

\`\`\`

> MySQL is an open-source relational database management system known for its reliability and versatility, widely used for building and managing databases in various applications.
`,I=`# MongoDB

[\`MongoDB\`](https://www.mongodb.com/) is a popular NoSQL database management system that provides a flexible, scalable, and document-oriented approach to storing and retrieving data. Developed by MongoDB Inc., MongoDB is designed to handle large amounts of unstructured or semi-structured data, making it suitable for a wide range of applications, including web development, mobile apps, and analytics.
<br/>

MongoDB stores data in a flexible, JSON-like format called BSON (Binary JSON), which allows developers to represent complex data structures and relationships. It supports dynamic schema, making it easy to adapt to evolving application requirements. MongoDB is known for its horizontal scalability, automatic sharding, and comprehensive query capabilities.

<br/>

MongoDB is :

- NoSQL: Adopts a non-relational approach, providing flexibility in data modeling and storage.
- document-oriented: Stores data in BSON documents, allowing for rich and nested data structures.
- scalable: Scales horizontally to handle large volumes of data by distributing it across multiple servers.

<br/>

## Example

\`\`\`ts
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
\`\`\`

> MongoDB is a NoSQL document-oriented database management system known for its flexibility and scalability, widely used for handling unstructured or semi-structured data in various applications.
`,M=`# PostgreSQL

[\`PostgreSQL\`](https://www.postgresql.org/) is a powerful open-source relational database management system (RDBMS) known for its advanced features, extensibility, and standards compliance. PostgreSQL, often referred to as "Postgres," supports a wide range of data types, indexing options, and complex queries, making it suitable for various applications, from small projects to large enterprise systems.
<br/>

PostgreSQL follows the SQL standard and provides additional features, including support for JSON, XML, and spatial data. It has a robust security model, supports ACID (Atomicity, Consistency, Isolation, Durability) properties, and offers features like triggers, stored procedures, and views. PostgreSQL is widely used in mission-critical applications due to its reliability, extensibility, and strong community support.

<br/>

PostgreSQL is :

- open-source: Being open-source promotes transparency, community collaboration, and ease of access for developers.
- standards-compliant: Adheres to SQL standards and provides additional features, ensuring compatibility and flexibility.
- extensible: Supports the development of custom functions, operators, and data types, allowing for extensibility and customization.

<br/>

## Example

\`\`\`ts
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(50) NOT NULL,
  email VARCHAR(100) NOT NULL
);

INSERT INTO users (username, email) VALUES
  ('john_doe', 'john@example.com'),
  ('jane_smith', 'jane@example.com');

SELECT * FROM users;

\`\`\`

> PostgreSQL is a powerful open-source relational database management system known for its advanced features, standards compliance, and extensibility, widely used for various applications.
`,j=`# Prisma

[\`Prisma \`](https://www.prisma.io/) is a modern, open-source database toolkit and Object-Relational Mapping (ORM) tool for TypeScript and Node.js applications. Prisma simplifies database access by providing a type-safe and auto-generated query builder. It supports multiple databases, including MySQL, PostgreSQL, SQLite, and SQL Server.
<br/>

Prisma's key features include a powerful query builder, automatic schema migrations, and type-safe database access using TypeScript. It provides a declarative and intuitive API for database operations, making it easy for developers to interact with databases without writing raw SQL queries. Prisma Client, the generated database client, ensures type safety and autocompletion for queries.

<br/>

Prisma is :

- type-safe: Utilizes TypeScript to provide type safety and autocompletion for database queries.
- declarative: Offers a declarative API for defining database models and relationships.
- migrate: Supports automatic schema migrations, making it easy to evolve the database schema with code changes.

<br/>

## Example

\`\`\`ts
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

\`\`\`

> Prisma is a modern database toolkit and ORM for TypeScript and Node.js, providing a type-safe query builder, automatic migrations, and a declarative API for database operations.
`,E=`# Sequelize

[\`Sequelize\`](https://sequelize.org/) is a powerful Object-Relational Mapping (ORM) library for Node.js, supporting various SQL databases such as PostgreSQL, MySQL, SQLite, and MSSQL. Sequelize simplifies database interactions by providing a straightforward way to define models, perform queries, and manage database relationships using JavaScript or TypeScript.
<br/>

Sequelize supports both promise-based and async/await patterns, making it easy to work with asynchronous operations. It includes features like migrations, associations, and hooks, allowing developers to manage database schemas, model relationships, and execute custom logic during database operations.

<br/>

Sequelize is :

- flexible: Works with various SQL databases, allowing developers to switch databases without significant code changes.
- feature-rich: Provides comprehensive features such as migrations, associations, and hooks to manage database operations.
- well-documented: Has extensive documentation and a strong community, making it easy for developers to get started and find support.

<br/>

## Example

\`\`\`ts
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
\`\`\`

> Sequelize is a powerful ORM for Node.js that simplifies database interactions, supporting various SQL databases and providing features like migrations, associations, and hooks.
`,A=`# Docker

[\`Docker\`](https://www.docker.com/) is an open-source platform that enables developers to automate the deployment of applications within lightweight, portable containers. Containers are standalone, executable packages that include everything needed to run a piece of software, including the code, runtime, libraries, and system tools. Docker makes it easy to develop, deploy, and scale applications consistently across different environments.
<br/>

Docker uses a client-server architecture, where the Docker client communicates with the Docker daemon to build, run, and manage containers. It leverages containerization technology to isolate applications and their dependencies, ensuring consistency and reproducibility across various environments. Docker images, the blueprints for containers, are versioned, shareable, and can be distributed through container registries like Docker Hub.

<br/>

Docker is :

- containerized: Utilizes containerization to package applications and their dependencies in isolated, lightweight containers.
- portable: Ensures consistency across different environments, from development to testing and production.
- scalable: Enables easy scaling of applications by deploying and orchestrating containers using tools like Docker Compose and Kubernetes.

<br/>

## Example

\`\`\`ts
FROM node:14

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]

\`\`\`

>     Docker is an open-source platform for automating the deployment of applications in lightweight, portable containers, ensuring consistency and scalability across different environments.
`,R=`# NGINX

[\`NGINX\`](https://www.nginx.com/) is a high-performance open-source web server and reverse proxy server. It is known for its speed, efficiency, and versatility, making it a popular choice for serving static content, handling SSL/TLS termination, load balancing, and acting as a reverse proxy for dynamic web applications. NGINX is widely used in both small-scale projects and large-scale deployments.
<br/>

NGINX is designed to efficiently handle concurrent connections and serve static content with minimal resource usage. It also excels in proxying requests to backend applications, distributing traffic among multiple servers, and providing various features to optimize web server performance. NGINX can be extended using modules and is often used as a frontend server in combination with backend application servers.

<br/>

NGINX is :

- high-performance: Optimized for handling a large number of concurrent connections and serving static content efficiently.
- versatile: Used as a web server, reverse proxy, load balancer, and more, making it suitable for various use cases.
- scalable: Scales well in both small and large-scale deployments, providing performance and reliability.

<br/>

## Example

\`\`\`ts
server {
    listen 80;
    server_name example.com;

    root /var/www/html;

    index index.html;

    error_page 404 /404.html;

    location / {
        try_files $uri $uri/ =404;
    }

    location = /favicon.ico {
        access_log off;
        log_not_found off;
    }

    location = /robots.txt {
        access_log off;
        log_not_found off;
    }

    location /404.html {
        internal;
    }

}

\`\`\`

> NGINX is a high-performance web server and reverse proxy known for its speed, efficiency, and versatility, widely used for serving static content, load balancing, and more.
`,D=`# Git

[\`Git\`](https://git-scm.com/) is a distributed version control system that helps developers track changes, collaborate on projects, and manage source code history. Created by Linus Torvalds, Git is designed to be fast, efficient, and flexible. It is widely used in software development to maintain codebases, track changes, and facilitate collaboration among team members.
<br/>

Git operates on a branching model, allowing developers to create branches for new features or bug fixes, and then merge them back into the main branch. It provides a decentralized approach, meaning every developer has a complete copy of the repository, enabling work to continue offline. Git also includes powerful tools for resolving conflicts, inspecting history, and collaborating with others through platforms like GitHub, GitLab, or Bitbucket.

<br/>

Git is :

- distributed: Allows each developer to have a complete copy of the repository, enabling offline work and decentralized collaboration.
- flexible: Supports various branching strategies, allowing developers to experiment with features in separate branches before merging into the main branch.
- fast: Operates efficiently even on large codebases, making it suitable for projects of all sizes.

<br/>

## Example

\`\`\`ts
# Basic Git commands for a new project

# Initialize a new Git repository
git init

# Add files to the staging area
git add .

# Commit changes to the local repository
git commit -m "Initial commit"

# Create a new branch for a new feature
git branch feature-branch
git checkout feature-branch

# Make changes and commit to the feature branch
git add .
git commit -m "Add new feature"

# Switch back to the main branch
git checkout main

# Merge the feature branch into the main branch
git merge feature-branch

# Push changes to a remote repository (e.g., GitHub)
git remote add origin <repository-url>
git push -u origin main

\`\`\`

> Git is a distributed version control system widely used in software development to track changes, collaborate on projects, and manage source code history efficiently.
`,O=`# Bitbucket

[\`Bitbucket\`](https://bitbucket.org/) is a web-based platform for version control, source code management, and collaboration. It provides Git and Mercurial repositories, allowing developers to host and manage their codebase, track changes, and collaborate with team members. Bitbucket is often used in conjunction with Git or Mercurial clients to streamline the development workflow.
<br/>

Bitbucket offers features such as pull requests, branching, issue tracking, and integration with various CI/CD (Continuous Integration/Continuous Deployment) tools. It provides a user-friendly interface for managing repositories, code reviews, and team collaboration. Bitbucket is commonly used by development teams for both small and large-scale projects.

<br/>

Bitbucket is :

- version control platform: Hosts Git and Mercurial repositories, providing version control for source code.
- collaboration tool: Supports features like pull requests, issue tracking, and team collaboration to streamline the development process.
- integrations: Offers integrations with various CI/CD tools and third-party services for enhanced development workflows.

<br/>

> Bitbucket is a web-based platform for version control and collaboration, supporting Git and Mercurial repositories for managing source code, tracking changes, and facilitating team collaboration.
`,N=`# WordPressWordPress

[\`WordPress\`](https://wordpress.com/) is a popular open-source content management system (CMS) that enables users to create and manage websites easily. Originally developed as a blogging platform, WordPress has evolved into a versatile CMS that powers a significant portion of the web. It is known for its user-friendly interface, extensive plugin ecosystem, and customizable themes.
<br/>

WordPress is built on PHP and uses a MySQL database to store content and settings. It allows users to create, edit, and publish content through a web-based interface. WordPress supports the use of themes to control the visual appearance of a site and plugins to add functionality or extend features. It is widely used for blogs, business websites, e-commerce sites, and more.

<br/>

WordPress is :

- user-friendly: Offers an intuitive interface for content creation, making it accessible for users with various technical backgrounds.
- customizable: Supports a vast ecosystem of themes and plugins, allowing users to customize the appearance and functionality of their websites.
- extensible: Provides a robust platform for developers to build custom themes, plugins, and extensions.

<br/>

> WordPress is a versatile and user-friendly content management system, widely used for creating and managing websites, blogs, and online stores.
`;function B(t,...a){const s=Object.assign({},t);return Object.keys(s).forEach(i=>{a.includes(i)&&delete s[i]}),s}const o=t=>t,H=[o({name:"Programming Languages",slug:"pro-lang"}),o({name:"Frameworks",slug:"framework"}),o({name:"Libraries",slug:"library"}),o({name:"Langauges",slug:"lang"}),o({name:"Databases",slug:"db"}),o({name:"ORMs",slug:"orm"}),o({name:"DevOps",slug:"devops"}),o({name:"Dev Tools",slug:"devtools"}),o({name:"Markup & Style",slug:"markup-style"}),o({name:"CMS",slug:"cms"})],n=t=>{const a=B(t,"category");return t.category&&(a.category=H.find(s=>s.slug===t.category)),a},c=[n({slug:"GO",color:"#00A7D0",description:p,logo:e.Go,name:"GO",category:"pro-lang"}),n({slug:"TS",color:"blue",description:u,logo:e.TypeScript,name:"Typescript",category:"pro-lang"}),n({slug:"PHP",color:"#777BB3",description:m,logo:e.PHP,name:"PHP",category:"pro-lang"}),n({slug:"JS",color:"yellow",description:g,logo:e.JavaScript,name:"Javascript",category:"pro-lang"}),n({slug:"Laravel",color:"#F9322C",description:y,logo:e.LARAVEL,name:"Laravel",category:"framework"}),n({slug:"ExpressJs",color:"#202124",description:v,logo:e.ExpressJs,name:"ExpressJs",category:"framework"}),n({slug:"Angular",color:"#BD002E",description:w,logo:e.Angular,name:"Angular",category:"framework"}),n({slug:"Vuejs",color:"#3FB27F",description:S,logo:e.VueJs,name:"Vuejs",category:"framework"}),n({slug:"React-native",color:"cyan",description:k,logo:e.ReactJs,name:"React Native",category:"framework"}),n({slug:"css",color:"blue",description:f,logo:e.CSS,name:"CSS",category:"markup-style"}),n({slug:"html",color:"orange",description:b,logo:e.HTML,name:"HTML",category:"markup-style"}),n({slug:"sass",color:"pink",description:h,logo:e.Sass,name:"Sass",category:"markup-style"}),n({slug:"reactjs",color:"cyan",description:x,logo:e.ReactJs,name:"React Js",category:"library"}),n({slug:"tailwindcss",color:"#38BDF8",description:C,logo:e.Tailwind,name:"Tailwind Css",category:"library"}),n({slug:"Bootstrap",color:"#6D0FF3",description:P,logo:e.Bootstrap,name:"Bootstrap",category:"library"}),n({slug:"jQuery",color:"#0865A7",description:L,logo:e.jQuery,name:"jQuery",category:"library"}),n({slug:"MySQL",color:"#E58F10",description:T,logo:e.MySQL,name:"MySQL",category:"db"}),n({slug:"MongoDb",color:"#12a54f",description:I,logo:e.MongoDB,name:"MongoDb",category:"db"}),n({slug:"PostgreSQL",color:"#3C89CE",description:M,logo:e.PostgreSQL,name:"PostgreSQL",category:"db"}),n({slug:"Prisma",color:"#3C89CE",description:j,logo:e.PRISMA,name:"Prisma",category:"orm"}),n({slug:"Sequelize",color:"#3C89CE",description:E,logo:e.sequelizejs,name:"Sequelize",category:"orm"}),n({slug:"Docker",color:"#3C89CE",description:A,logo:e.Docker,name:"Docker",category:"devops"}),n({slug:"NGINX",color:"#019639",description:R,logo:e.Nginx,name:"NGINX",category:"devops"}),n({slug:"GIT",color:"#E94E31",description:D,logo:e.GIT,name:"GIT",category:"devops"}),n({slug:"Bitbucket",color:"#2185FF",description:O,logo:e.bitbucket,name:"Bitbucket",category:"devtools"}),n({slug:"Wordpress",color:"#2185FF",description:N,logo:e.wordpress,name:"Wordpress",category:"cms"})],z="Skills",J=(...t)=>c.filter(a=>t.includes(a.slug)),Q=t=>{const a=[],s=[];return c.forEach(i=>{if(t.trim()&&!i.name.toLowerCase().includes(t.trim().toLowerCase()))return;if(!i.category){console.log(i.category),s.push(i);return}let r=a.find(d=>{var l;return d.category.slug===((l=i.category)==null?void 0:l.slug)});r||(r={items:[],category:i.category},a.push(r)),r.items.push(i)}),s.length!==0&&a.push({category:{name:"Others",slug:"others"},items:s}),a};export{Q as a,J as g,c as i,z as t};
