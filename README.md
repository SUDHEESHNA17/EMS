# EMS
# Employee Management System

## Overview
The Employee Management System is a web application designed to maintain information about employees' personal details, manage leave requests, and assign tasks. Employees can apply for leave, and managers can review, approve, or reject these requests. Additionally, managers can assign tasks to employees, who can then update the status of these tasks.

## Features
- *Employee Information Management*: Store and maintain personal details of employees.
- *Leave Management*: Employees can apply for leave, and managers can review and approve or reject leave requests.
- *Task Management*: Managers can assign tasks to employees, and employees can update the status of their tasks.

## Technologies Used
- *Backend*: Java, Spring Boot
- *Frontend*: HTML, CSS, Bootstrap, ReactJS
- *Database*: MySQL
## Team Members
1.Pradeepthi -Lead Developer

2.Sudheeshna-Frontend Developer

3.Tejas-Backend Developer

4.Sriya-ui/ux Designer

5.Vignan-project Manager

## Getting Started

### Prerequisites
Ensure you have the following installed:
- Java Development Kit (JDK)
- Maven
- Node.js and npm
- MySQL

### Installation

1. *Clone the repository*
   sh
   git clone https://github.com/your-username/employee-management-system.git
   cd employee-management-system
   

2. *Backend Setup*
   - Navigate to the backend directory
     sh
     cd backend
     
   - Build the Spring Boot application using Maven
     sh
     mvn clean install
     
   - Run the application
     sh
     mvn spring-boot:run
     

3. *Frontend Setup*
   - Navigate to the frontend directory
     sh
     cd frontend
     
   - Install dependencies
     sh
     npm install
     
   - Start the React application
     sh
     npm start
     

4. *Database Setup*
   - Create a database in MySQL
     sql
     CREATE DATABASE employee_management;
     
   - Update the database configuration in the Spring Boot application (usually found in application.properties or application.yml)

## Usage
- Access the application at http://localhost:3000 for the frontend.
- Use the backend API hosted at http://localhost:8080 for various operations.

## Contributing
Contributions are welcome! Please fork the repository and create a pull request with your changes.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.



