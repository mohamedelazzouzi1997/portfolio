import{A as e}from"./UIcon.2a8f2572.js";const o=`# Svelte

---

[\`Svelte\`](https://svelte.dev/) is a free and open-source front end component framework or language created by Rich Harris and maintained by the Svelte core team members. Svelte is not a monolithic JavaScript library imported by applications: instead, Svelte compiles HTML templates to specialized code that manipulates the DOM directly, which may reduce the size of transferred files and give better client performance. Application code is also processed by the compiler, inserting calls to automatically recompute data and re-render UI elements when the data they depend on is modified. This also avoids the overhead associated with runtime intermediate representations, such as virtual DOM, unlike traditional frameworks (such as React and Vue) which carry out the bulk of their work at runtime, i.e. in the browser.

The compiler itself is written in TypeScript. Its source code is licensed under MIT License and hosted on GitHub.

<br/>

Svelte is :

- compiled : Svelte shifts as much work as possible out of the browser and into your build step. No more manual optimisations — just faster, more efficient apps.
- compact : Write breathtakingly concise components using languages you already know — HTML, CSS and JavaScript. Oh, and your application bundles will be tiny as well.
- complete : Built-in scoped styling, state management, motion primitives, form bindings and more — don't waste time trawling npm for the bare essentials. It's all here.

<br/>

## Example

\`\`\`ts
<script>
    let count = 1;
    $: doubled = count * 2;
<\/script>

<p>{count} * 2 = {doubled}</p>

<button on:click={() => count = count + 1}>Count</button>
\`\`\`

> Svelte is a free and open-source front end component framework or language created by Rich Harris and maintained by the Svelte core team members.
`,u=`# GO

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
`,m=`# TS

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
`,g=`# PHP

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
`,f=`# JS

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
`,h=`# CSS (Cascading Style Sheets)

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
`,v=`# Sass (Syntactically Awesome Stylesheets)

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
`,w=`# Express.js

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
`,S=`# Angular

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
`,k=`# Vue.js

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
`,x=`# React Native

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
`,C=`# React.js

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
`,T=`# Tailwind CSS

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
`,j=`# Bootstrap

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
`,P=`# jQuery

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
`;function M(t,...a){const r=Object.assign({},t);return Object.keys(r).forEach(i=>{a.includes(i)&&delete r[i]}),r}const s=t=>t,E=[s({name:"Programming Languages",slug:"pro-lang"}),s({name:"Frameworks",slug:"framework"}),s({name:"Libraries",slug:"library"}),s({name:"Langauges",slug:"lang"}),s({name:"Databases",slug:"db"}),s({name:"ORMs",slug:"orm"}),s({name:"DevOps",slug:"devops"}),s({name:"Dev Tools",slug:"devtools"}),s({name:"Markup & Style",slug:"markup-style"}),s({name:"CMS",slug:"cms"})],n=t=>{const a=M(t,"category");return t.category&&(a.category=E.find(r=>r.slug===t.category)),a},d=[n({slug:"GO",color:"#00A7D0",description:u,logo:e.Go,name:"GO",category:"pro-lang"}),n({slug:"TS",color:"blue",description:m,logo:e.TypeScript,name:"Typescript",category:"pro-lang"}),n({slug:"PHP",color:"#777BB3",description:g,logo:e.PHP,name:"PHP",category:"pro-lang"}),n({slug:"JS",color:"yellow",description:f,logo:e.JavaScript,name:"Javascript",category:"pro-lang"}),n({slug:"Laravel",color:"#F9322C",description:y,logo:e.LARAVEL,name:"Laravel",category:"framework"}),n({slug:"ExpressJs",color:"#202124",description:w,logo:e.ExpressJs,name:"ExpressJs",category:"framework"}),n({slug:"Angular",color:"#BD002E",description:S,logo:e.Angular,name:"Angular",category:"framework"}),n({slug:"Vuejs",color:"#3FB27F",description:k,logo:e.VueJs,name:"Vuejs",category:"framework"}),n({slug:"React-native",color:"cyan",description:x,logo:e.ReactJs,name:"React Native",category:"framework"}),n({slug:"css",color:"blue",description:h,logo:e.CSS,name:"CSS",category:"markup-style"}),n({slug:"html",color:"orange",description:b,logo:e.HTML,name:"HTML",category:"markup-style"}),n({slug:"sass",color:"pink",description:v,logo:e.Sass,name:"Sass",category:"markup-style"}),n({slug:"reactjs",color:"cyan",description:C,logo:e.ReactJs,name:"React Js",category:"library"}),n({slug:"tailwindcss",color:"#38BDF8",description:T,logo:e.Tailwind,name:"Tailwind Css",category:"library"}),n({slug:"Bootstrap",color:"#6D0FF3",description:j,logo:e.Bootstrap,name:"Bootstrap",category:"library"}),n({slug:"jQuery",color:"#0865A7",description:P,logo:e.jQuery,name:"jQuery",category:"library"}),n({slug:"MySQL",color:"#E58F10",description:o,logo:e.MySQL,name:"MySQL",category:"db"}),n({slug:"MongoDb",color:"#12a54f",description:o,logo:e.MongoDB,name:"MongoDb",category:"db"}),n({slug:"PostgreSQL",color:"#3C89CE",description:o,logo:e.PostgreSQL,name:"PostgreSQL",category:"db"}),n({slug:"Prisma",color:"#3C89CE",description:o,logo:e.PRISMA,name:"Prisma",category:"orm"}),n({slug:"Sequelize",color:"#3C89CE",description:o,logo:e.sequelizejs,name:"Sequelize",category:"orm"}),n({slug:"Docker",color:"#3C89CE",description:o,logo:e.Docker,name:"Docker",category:"devops"}),n({slug:"NGINX",color:"#019639",description:o,logo:e.Nginx,name:"NGINX",category:"devops"}),n({slug:"GIT",color:"#E94E31",description:o,logo:e.GIT,name:"GIT",category:"devops"}),n({slug:"Bitbucket",color:"#2185FF",description:o,logo:e.bitbucket,name:"Bitbucket",category:"devtools"}),n({slug:"Wordpress",color:"#2185FF",description:o,logo:e.wordpress,name:"Wordpress",category:"cms"})],L="Skills",A=(...t)=>d.filter(a=>t.includes(a.slug)),H=t=>{const a=[],r=[];return d.forEach(i=>{if(t.trim()&&!i.name.toLowerCase().includes(t.trim().toLowerCase()))return;if(!i.category){console.log(i.category),r.push(i);return}let l=a.find(p=>{var c;return p.category.slug===((c=i.category)==null?void 0:c.slug)});l||(l={items:[],category:i.category},a.push(l)),l.items.push(i)}),r.length!==0&&a.push({category:{name:"Others",slug:"others"},items:r}),a};export{H as a,A as g,d as i,L as t};
