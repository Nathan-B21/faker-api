const express = require("express");
const cors = require("cors");
const faker = require("faker");
const port = 8000;
const app = express();


app.use(cors());
app.use(express.json());

class User{
    constructor(){
        this.firstName = faker.name.firstName();
        this.lastName = faker.name.lastName();
        this.phoneNumber = faker.phone.phoneNumber();
        this.email = faker.internet.email();
        this.password = faker.internet.password();

    }
}

class Company{
    constructor(){
        this.name = faker.company.companyName();
        this.address = {street:faker.address.streetAddress(), city:faker.address.city(), state: faker.address.state(), zipCode: faker.address.zipCodeByState(), country: faker.address.country()};
        
    }
}



app.get("/api/users/new", (req, res) => {
    var newUser = new User();
    res.json({result: newUser});
});

app.get("/api/companies/new", (req, res) => {
    var newCompany = new Company();
    res.json({result: newCompany});
});

app.get("/api/company", (req, res) => {
    var newCompany = new Company();
    var newUser = new User();
    res.json({result:{newUser, newCompany}});
});

app.get("/", (req, res) => {
    res.json({"message": "hello universe"});
});

app.listen(port, () => console.log(`Listening on port ${port}`));