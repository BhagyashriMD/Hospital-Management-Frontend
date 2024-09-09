# Hospital Management System Project

The Hospital Management Application is built with Angular and Springboot.
The primary objective of the project is to design and develop a hospital management website which can be accessed by the doctor and admin.
Admin dashboard displays the current patient list excluding few sensitve diagnostic details. Admin has the access to maintain the appointment list in his dashboard. 

 # ARCHITECTURE
The overall architecture would involve:

1. **Angular Front-end:**
   - The Angular application would consume the RESTful API provided by the Spring Boot back-end.
   - It would use Angular components, services, and routing to build the various modules (patient, doctor, billing) and manage the user interface.
   
2. **Spring Boot Back-end:**
   - The Spring Boot application would expose the necessary API endpoints for the Angular front-end to interact with.
   - It would handle the business logic, such as patient management, doctor management, appointment scheduling, and billing.
   - Spring Data JPA or a similar ORM would be used to interact with the database and perform CRUD operations.
   - Spring Security would be used to implement authentication and authorization mechanisms.

3. **Database Integration:**
   - The system would use a relational database (e.g., MySQL) to store all the relevant data, such as patient records, doctor profiles, appointment details.
   - The Spring Boot application would handle the database connections and perform data persistence and retrieval operations.


This is a high-level overview of the components and architecture involved in building a hospital management system using Angular and Spring Boot. The actual implementation would involve writing code, configuring the various components, and integrating them to create a fully functional application.

To create a hospital management system using Angular and Spring Boot, we would need to implement the following components:

**Front-end (Angular):**
- Patient Management Module
  - Patient Registration
  - Patient Records
  - Appointment Scheduling
- Doctor Management Module
  - Doctor Profiles
  - Appointment Management
- Billing and Inventory Module
  - Billing Records
  - Medication and Supply Management

**Back-end (Spring Boot):**
- RESTful API Endpoints
  - Patient CRUD operations
  - Doctor CRUD operations
  - Appointment management
  - Billing and inventory management
- Database Integration
  - Connecting to a database (e.g., MySQL) to store patient, doctor, appointment, and billing data
- Security and Authentication
  - Implementing user roles (patient, doctor, admin) and access control
  - Securing the API endpoints with JWT-based authentication




# Tech Stack
Client: Angular, HTML, Typescript, CSS, Javascript

Server: Spring boot, Java

Database: MySQL8

# FrontendForHospitalMgmtSystem

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
