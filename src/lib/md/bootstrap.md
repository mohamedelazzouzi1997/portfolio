# Bootstrap

[`Bootstrap`](https://getbootstrap.com/) is a popular open-source front-end framework developed by Twitter. It provides a set of pre-designed components, styles, and utilities to streamline the process of building responsive and visually appealing websites and web applications. Bootstrap is built on HTML, CSS, and JavaScript, making it easy to use for both beginners and experienced developers.
<br/>

Bootstrap's components include navigation bars, modals, forms, buttons, and more, all styled with a consistent and modern design. It also includes a responsive grid system that facilitates the creation of layouts that adapt to various screen sizes. Bootstrap's JavaScript plugins enhance the user experience with features such as carousels, tooltips, and popovers.

<br/>

Bootstrap is :

- responsive: Includes a responsive grid system and components, ensuring optimal viewing and interaction on various devices.
- customizable: Offers options for customization through variables, themes, and a wide range of utility classes.
- comprehensive: Provides a comprehensive set of pre-designed components and styles, reducing the need for custom CSS and JavaScript.

<br/>

## Example

```ts
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

  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>

```

>     Bootstrap is a popular front-end framework that provides a set of pre-designed components and styles for building responsive and visually appealing web applications.
