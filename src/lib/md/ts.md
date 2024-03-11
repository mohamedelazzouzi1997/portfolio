# TS

[`TS`](https://www.typescriptlang.org/) is a superset of JavaScript that adds static typing to the language. Developed by Microsoft, TypeScript provides developers with optional static types, making it easier to catch errors early in the development process. TypeScript code is transpiled into JavaScript, ensuring compatibility with all JavaScript runtimes and environments.
<br/>

TypeScript enhances the developer experience by introducing features like interfaces, enums, and advanced type-checking capabilities. It integrates seamlessly with modern development workflows and popular frameworks, such as React and Angular.

<br/>

TypeScript is :

- typed: Enjoy the benefits of static typing, enabling better code quality, improved tooling support, and early error detection during development.
- scalable: TypeScript scales with your project, offering a structured approach to building large and maintainable applications. It accommodates both small scripts and enterprise-level applications.
- modern: Leverage the latest ECMAScript features while also taking advantage of TypeScript-specific features. It aligns with the evolution of JavaScript, providing developers with modern language features.

<br/>

## Example

```ts
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
		console.log(`Count: ${this.count}`);
	}
}

// Example usage
const counter = new Counter(1);
counter.increment();
counter.display();
```

> TypeScript is a superset of JavaScript that adds static typing to the language, enhancing the developer experience with features like interfaces, enums, and advanced type-checking capabilities.
