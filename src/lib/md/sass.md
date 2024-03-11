# Sass (Syntactically Awesome Stylesheets)

[`Sass`](https://sass-lang.com/) is a preprocessor scripting language that is interpreted or compiled into Cascading Style Sheets (CSS). SassScript is the scripting language itself. It extends CSS by providing mechanisms such as variables, nested rules, and mixins, making stylesheets more maintainable and easier to write.
<br/>

Sass is compatible with all versions of CSS and allows for the use of both the indented syntax (Sass) and the more familiar CSS-style syntax. It provides features like variables, nesting, partials, and imports, allowing developers to create modular and efficient stylesheets.

<br/>

Sass is :

- modular: Breaks down stylesheets into modular components using features like partials and imports, making the codebase more maintainable.
- dynamic: Enables the use of variables, functions, and expressions, allowing for dynamic and reusable styles.
- powerful: Extends the capabilities of CSS with features like mixins, inheritance, and control directives, providing advanced styling options.

<br/>

## Example

```ts
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

```

> Sass is a preprocessor scripting language that extends CSS with features like variables, nesting, and mixins, providing a more modular and maintainable way to write styles.
