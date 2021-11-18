# Loan App Using Angular and Spring Boot

In this project I have created a Loan App which contains a features of Create a loan and generate payment schedule for all loans.

<br>



## Run Locally
<hr>

- clone the project

```
git clone https://github.com/DURAIPANDIT24/Loan-Fullstack-Assignment/tree/master/LoanFullstackAssignmentAngular
```
<br>

### To Start Angular Server

- Run the Following command to Start Angular server
```
ng serve
```

- Open Browser and Enter Following Command to Open Application.
```
http://localhost:4200/
```

<br>

### Database Setup
<hr>
In this Project I have Used PostgreSQL. You can use the database of your choice.

<br>

- [Install MySQL]


- Change the Database Credentials from 
`src/main/resources/application.properties` file. Create loanassignment Schema from mysql client.

```
spring.datasource.url=jdbc:mysql://localhost:3306/loanassignment
spring.datasource.username=root
spring.datasource.password=root

```
<br>

### To Start Spring Boot Server
<hr>


- Run the Following command to Start Spring Boot server
```
mvn spring-boot:run
```

- Project Will be Running on the 8080 Port.
```
http://localhost:8080/
```
<br>



<div align="center">
    <span style = "font-size: 1.3em; font-weight:bold"> Thanks </span>
<div>

<hr>
