# AngularProjectShop

Welcome to the Online Shop Web Project, an e-commerce web application designed to provide a seamless shopping experience. This project includes features such as product browsing, cart management, user authentication, and more.

## Project Overview

This online shop aims to create a user-friendly interface with the following key features:

- Product Catalog: Browse and select products from a wide range of offerings.
- Shopping Cart: Add products to the cart and proceed to make a purchase.
- User Authentication: Register, log in, and log out securely.
- Responsive Design: Ensures a consistent experience across various devices.


## Design

The project follows a well-organized structure and design principles:

- **Atomic Design**: Organizes components in a modular and scalable way.
- **Stylization**: Utilizes Bootstrap for styling and adheres to coding standards with ESLint and Prettier.
- **Clean Code**: Implements best practices for clean code, including the use of Husky, GitHub branches, and Styled Components.

## Project Setup

To start the project, follow these steps:

1. Open a terminal and run the command:
    `node server.js`
and in another terminal run command:
    `http-server -p 8080 -c-l .\dist\angular-project-shop`


### Authorization System

- Access the login page. If not registered, follow the provided link to the registration page.
- Upon successful registration, log in, and your data will be stored in localStorage for subsequent logins.

### Main App Logic

- Navigate the home page or click the cart button and aslo click the green cart button and go to the cart page. Also you can click the red cart button and clean cart. 
- The sidebar displays the categories click the categories button and select what you are looking for.
- In the product field, you can click the cart button and add the product to the cart. Also in the product field, you can see the product image and the price of the product, as well as additional information about the product.
- On the main page at the top, you can click a few buttons and change the display of products, as well as view products in more detail and as you like.
- You can also click on the show button, and the values that you selected in the show button will be displayed there, for example, 12, or 24, or 36.

### Progressive Web App (PWA)

- Non-existent paths lead to a 404 page, from where you can return to the main page.
- Offline functionality with service workers, displaying information to reconnect to the Internet.

## Additional Information

For more help or details on Angular CLI, refer to the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.