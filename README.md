# restapi-testing-postman-newman
Sample Rest Api testing using Postman.
- Uses [**Postman-Newman Framework**](https://github.com/nareshnavinash/Postman-Newman-Framework) for running Postman Collection(s).
- HTML Report is generated via **Allure-report**.
<!-- 
This can be executed in local machine or via Jenkins Pipeline.

Github actions were also setup for its CI/CD Pipeline.
-->


## How to run in local machine

- ## 💻 Pre-requisites
  - Git Bash
  - Node JS
  - Java 8 or higher *(for Allure Reporter)*

### 1. Clone the project
```
    git clone https://github.com/kentdomaoal/restapi-testing-postman-newman.git
```
```       
    cd restapi-testing-postman-newman
```
### 2. Install dependencies
```
    npm install
```    
### 3. Run the test
```
    npm run test -- <path to feed file>	
```
e.g.
```
    npm run test -- /feed/run.json
```        
### 4. View html report
Run this command to open the allure generated report
``` 
    npm run allure-serve
```