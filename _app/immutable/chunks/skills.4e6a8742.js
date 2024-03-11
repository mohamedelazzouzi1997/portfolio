import{A as e}from"./UIcon.615ff053.js";const t=`# Svelte

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
`,m=`# GO

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
`,p=`# TS

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
`,b=`# JS

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
`;function h(a,...n){const o=Object.assign({},a);return Object.keys(o).forEach(s=>{n.includes(s)&&delete o[s]}),o}const r=a=>a,v=[r({name:"Programming Languages",slug:"pro-lang"}),r({name:"Frameworks",slug:"framework"}),r({name:"Libraries",slug:"library"}),r({name:"Langauges",slug:"lang"}),r({name:"Databases",slug:"db"}),r({name:"ORMs",slug:"orm"}),r({name:"DevOps",slug:"devops"}),r({name:"Dev Tools",slug:"devtools"}),r({name:"Markup & Style",slug:"markup-style"}),r({name:"CMS",slug:"cms"})],i=a=>{const n=h(a,"category");return a.category&&(n.category=v.find(o=>o.slug===a.category)),n},l=[i({slug:"GO",color:"#00A7D0",description:m,logo:e.Go,name:"GO",category:"pro-lang"}),i({slug:"TS",color:"blue",description:p,logo:e.TypeScript,name:"Typescript",category:"pro-lang"}),i({slug:"PHP",color:"#777BB3",description:g,logo:e.PHP,name:"PHP",category:"pro-lang"}),i({slug:"JS",color:"yellow",description:b,logo:e.JavaScript,name:"Javascript",category:"pro-lang"}),i({slug:"Laravel",color:"#F9322C",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent orci enim, congue sit amet justo eget, consequat sollicitudin libero. Etiam iaculis lectus tempor, hendrerit enim in, luctus arcu. Maecenas id enim et nibh ullamcorper auctor ac eu est. Donec imperdiet, diam quis malesuada faucibus, nibh ex gravida sapien, posuere pharetra nunc libero tristique turpis. Sed egestas laoreet semper. In hac habitasse platea dictumst. Praesent vitae est nec felis maximus facilisis. Duis luctus dui id urna tristique varius. Ut vulputate leo arcu, non bibendum arcu pulvinar eget. Fusce semper elit ut congue lacinia. Suspendisse magna diam, tempus vitae interdum eget, dictum vitae nisl. Praesent quis fringilla tortor. Donec vitae sagittis dui.",logo:e.LARAVEL,name:"Laravel",category:"framework"}),i({slug:"ExpressJs",color:"#202124",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent orci enim, congue sit amet justo eget, consequat sollicitudin libero. Etiam iaculis lectus tempor, hendrerit enim in, luctus arcu. Maecenas id enim et nibh ullamcorper auctor ac eu est. Donec imperdiet, diam quis malesuada faucibus, nibh ex gravida sapien, posuere pharetra nunc libero tristique turpis. Sed egestas laoreet semper. In hac habitasse platea dictumst. Praesent vitae est nec felis maximus facilisis. Duis luctus dui id urna tristique varius. Ut vulputate leo arcu, non bibendum arcu pulvinar eget. Fusce semper elit ut congue lacinia. Suspendisse magna diam, tempus vitae interdum eget, dictum vitae nisl. Praesent quis fringilla tortor. Donec vitae sagittis dui.",logo:e.ExpressJs,name:"ExpressJs",category:"framework"}),i({slug:"Angular",color:"#BD002E",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent orci enim, congue sit amet justo eget, consequat sollicitudin libero. Etiam iaculis lectus tempor, hendrerit enim in, luctus arcu. Maecenas id enim et nibh ullamcorper auctor ac eu est. Donec imperdiet, diam quis malesuada faucibus, nibh ex gravida sapien, posuere pharetra nunc libero tristique turpis. Sed egestas laoreet semper. In hac habitasse platea dictumst. Praesent vitae est nec felis maximus facilisis. Duis luctus dui id urna tristique varius. Ut vulputate leo arcu, non bibendum arcu pulvinar eget. Fusce semper elit ut congue lacinia. Suspendisse magna diam, tempus vitae interdum eget, dictum vitae nisl. Praesent quis fringilla tortor. Donec vitae sagittis dui.",logo:e.Angular,name:"Angular",category:"framework"}),i({slug:"Vuejs",color:"#3FB27F",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent orci enim, congue sit amet justo eget, consequat sollicitudin libero. Etiam iaculis lectus tempor, hendrerit enim in, luctus arcu. Maecenas id enim et nibh ullamcorper auctor ac eu est. Donec imperdiet, diam quis malesuada faucibus, nibh ex gravida sapien, posuere pharetra nunc libero tristique turpis. Sed egestas laoreet semper. In hac habitasse platea dictumst. Praesent vitae est nec felis maximus facilisis. Duis luctus dui id urna tristique varius. Ut vulputate leo arcu, non bibendum arcu pulvinar eget. Fusce semper elit ut congue lacinia. Suspendisse magna diam, tempus vitae interdum eget, dictum vitae nisl. Praesent quis fringilla tortor. Donec vitae sagittis dui.",logo:e.VueJs,name:"Vuejs",category:"framework"}),i({slug:"React-native",color:"cyan",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent orci enim, congue sit amet justo eget, consequat sollicitudin libero. Etiam iaculis lectus tempor, hendrerit enim in, luctus arcu. Maecenas id enim et nibh ullamcorper auctor ac eu est. Donec imperdiet, diam quis malesuada faucibus, nibh ex gravida sapien, posuere pharetra nunc libero tristique turpis. Sed egestas laoreet semper. In hac habitasse platea dictumst. Praesent vitae est nec felis maximus facilisis. Duis luctus dui id urna tristique varius. Ut vulputate leo arcu, non bibendum arcu pulvinar eget. Fusce semper elit ut congue lacinia. Suspendisse magna diam, tempus vitae interdum eget, dictum vitae nisl. Praesent quis fringilla tortor. Donec vitae sagittis dui.",logo:e.ReactJs,name:"React Native",category:"framework"}),i({slug:"css",color:"blue",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent orci enim, congue sit amet justo eget, consequat sollicitudin libero. Etiam iaculis lectus tempor, hendrerit enim in, luctus arcu. Maecenas id enim et nibh ullamcorper auctor ac eu est. Donec imperdiet, diam quis malesuada faucibus, nibh ex gravida sapien, posuere pharetra nunc libero tristique turpis. Sed egestas laoreet semper. In hac habitasse platea dictumst. Praesent vitae est nec felis maximus facilisis. Duis luctus dui id urna tristique varius. Ut vulputate leo arcu, non bibendum arcu pulvinar eget. Fusce semper elit ut congue lacinia. Suspendisse magna diam, tempus vitae interdum eget, dictum vitae nisl. Praesent quis fringilla tortor. Donec vitae sagittis dui.",logo:e.CSS,name:"CSS",category:"markup-style"}),i({slug:"html",color:"orange",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent orci enim, congue sit amet justo eget, consequat sollicitudin libero. Etiam iaculis lectus tempor, hendrerit enim in, luctus arcu. Maecenas id enim et nibh ullamcorper auctor ac eu est. Donec imperdiet, diam quis malesuada faucibus, nibh ex gravida sapien, posuere pharetra nunc libero tristique turpis. Sed egestas laoreet semper. In hac habitasse platea dictumst. Praesent vitae est nec felis maximus facilisis. Duis luctus dui id urna tristique varius. Ut vulputate leo arcu, non bibendum arcu pulvinar eget. Fusce semper elit ut congue lacinia. Suspendisse magna diam, tempus vitae interdum eget, dictum vitae nisl. Praesent quis fringilla tortor. Donec vitae sagittis dui.",logo:e.HTML,name:"HTML",category:"markup-style"}),i({slug:"sass",color:"pink",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent orci enim, congue sit amet justo eget, consequat sollicitudin libero. Etiam iaculis lectus tempor, hendrerit enim in, luctus arcu. Maecenas id enim et nibh ullamcorper auctor ac eu est. Donec imperdiet, diam quis malesuada faucibus, nibh ex gravida sapien, posuere pharetra nunc libero tristique turpis. Sed egestas laoreet semper. In hac habitasse platea dictumst. Praesent vitae est nec felis maximus facilisis. Duis luctus dui id urna tristique varius. Ut vulputate leo arcu, non bibendum arcu pulvinar eget. Fusce semper elit ut congue lacinia. Suspendisse magna diam, tempus vitae interdum eget, dictum vitae nisl. Praesent quis fringilla tortor. Donec vitae sagittis dui.",logo:e.Sass,name:"Sass",category:"markup-style"}),i({slug:"reactjs",color:"cyan",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent orci enim, congue sit amet justo eget, consequat sollicitudin libero. Etiam iaculis lectus tempor, hendrerit enim in, luctus arcu. Maecenas id enim et nibh ullamcorper auctor ac eu est. Donec imperdiet, diam quis malesuada faucibus, nibh ex gravida sapien, posuere pharetra nunc libero tristique turpis. Sed egestas laoreet semper. In hac habitasse platea dictumst. Praesent vitae est nec felis maximus facilisis. Duis luctus dui id urna tristique varius. Ut vulputate leo arcu, non bibendum arcu pulvinar eget. Fusce semper elit ut congue lacinia. Suspendisse magna diam, tempus vitae interdum eget, dictum vitae nisl. Praesent quis fringilla tortor. Donec vitae sagittis dui.",logo:e.ReactJs,name:"React Js",category:"library"}),i({slug:"tailwindcss",color:"#38BDF8",description:t,logo:e.Tailwind,name:"Tailwind Css",category:"library"}),i({slug:"Bootstrap",color:"#6D0FF3",description:t,logo:e.Bootstrap,name:"Bootstrap",category:"library"}),i({slug:"jQuery",color:"#0865A7",description:t,logo:e.jQuery,name:"jQuery",category:"library"}),i({slug:"MySQL",color:"#E58F10",description:t,logo:e.MySQL,name:"MySQL",category:"db"}),i({slug:"MongoDb",color:"#12a54f",description:t,logo:e.MongoDB,name:"MongoDb",category:"db"}),i({slug:"PostgreSQL",color:"#3C89CE",description:t,logo:e.PostgreSQL,name:"PostgreSQL",category:"db"}),i({slug:"Prisma",color:"#3C89CE",description:t,logo:e.PRISMA,name:"Prisma",category:"orm"}),i({slug:"Sequelize",color:"#3C89CE",description:t,logo:e.sequelizejs,name:"Sequelize",category:"orm"}),i({slug:"Docker",color:"#3C89CE",description:t,logo:e.Docker,name:"Docker",category:"devops"}),i({slug:"NGINX",color:"#019639",description:t,logo:e.Nginx,name:"NGINX",category:"devops"}),i({slug:"GIT",color:"#E94E31",description:t,logo:e.GIT,name:"GIT",category:"devops"}),i({slug:"Bitbucket",color:"#2185FF",description:t,logo:e.bitbucket,name:"Bitbucket",category:"devtools"}),i({slug:"Wordpress",color:"#2185FF",description:t,logo:e.wordpress,name:"Wordpress",category:"cms"})],y="Skills",w=(...a)=>l.filter(n=>a.includes(n.slug)),S=a=>{const n=[],o=[];return l.forEach(s=>{if(a.trim()&&!s.name.toLowerCase().includes(a.trim().toLowerCase()))return;if(!s.category){console.log(s.category),o.push(s);return}let u=n.find(d=>{var c;return d.category.slug===((c=s.category)==null?void 0:c.slug)});u||(u={items:[],category:s.category},n.push(u)),u.items.push(s)}),o.length!==0&&n.push({category:{name:"Others",slug:"others"},items:o}),n};export{S as a,w as g,l as i,y as t};
