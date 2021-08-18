const express = require("express");

const app = express();
const port = 80;

app.get("/", (req, res)=> {
res.send("This is my first express app")
});

app.get("/about", (req, res)=> {
res.send("This is the about page of my first express app")
});

app.post("/about", (req, res)=> {
    res.send("This is the post request of about page of my first express app")
});

app.get("/contact", (req, res)=> {
res.status(404).send("The contact page of my first express app is not found")
});

app.listen(port, ()=>{
console.log(`"The application started successfully on port ${port}"`);
});

//postman mai localhost:80 daalne se res.send wala show hoga