# SoftecTaskAhmedMobasher

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.14.

# Project Description :

Ecommerce project consists of two modules [Products Module - Orders Module] and a header componenent that holds navbar .

## Header Component 

We have 3 main pages [ Products - Cart - Orders ]
each can access by navbar located in header as below .

![image](https://user-images.githubusercontent.com/48737204/145725445-323573ca-f818-49aa-ac85-51cb8e6e66a2.png)

## Add To Cart Functionality 

In Product list we can see product image , avilable quantity and price and user can access product details page by clicking on product name link .
After clicking on Add to cart button , product directly added to cart and it's quantity decremented by 1 item .
If product quantity is 0 user cannot added it to his cart and button text changed to Out of stock as below .

![image](https://user-images.githubusercontent.com/48737204/145725497-64f1c6a8-1dbb-45a0-a004-9d9057a57f98.png)

## Cart Page 

Cart page show products that user add to his cart with the option to remove it from cart or increment/decrement quantity of each product.

![image](https://user-images.githubusercontent.com/48737204/145725659-55434b74-0f06-4f26-9fdd-76597094d616.png)

# Increment product quantity

 User can increment product quantity in his cart until product's quantity equal to 0 [Out of stock] message will appear to user and he cannot increment this product anymore .
 
 ![image](https://user-images.githubusercontent.com/48737204/145725765-0b93d00c-577d-4c0e-b162-4d56adb22ef7.png)
 
 # Decrement product quantity 
 
 By default product added to cart with amount 1 and user cannot decrese amount of product less than 1.
 
 ## Checkout 
 
 In Cart page user can checkout by clicking to checkout button shown below table this will take user to checkout page so he can make an order.
 
 In Checkout page user can make order by filling a simple form on the left side and right side of this page will show products amount that will be ordered , price for each and so on total as below . 
 
 ![image](https://user-images.githubusercontent.com/48737204/145725860-2c120b2c-e1a4-4ca1-b99d-4028e722136b.png)
 
 ![image](https://user-images.githubusercontent.com/48737204/145726047-ceb6315b-bc3d-4daf-8a82-29c6b1a21cb7.png)
 
 ## Orders List 
 
 After making an order app will navigated to orders list page that show all orders making by user in the application and Order Details Button that will show order details and products ordered as below 
 
 ![image](https://user-images.githubusercontent.com/48737204/145726118-701f7040-7c0e-4982-b34e-f3ef17060cfc.png)
 
 ## Order Details Page 
 
 This page shown details of selected order and it's product , total amount of order and date of order .
 
 ![image](https://user-images.githubusercontent.com/48737204/145726140-559ee5e7-bd0e-4b85-a44a-a140b22e313b.png)


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
