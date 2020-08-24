const express=require("express");
const logger=require("morgan");
//requiring the 'express' package
//returns a function that creates and instance
//of the express application

//Middleware
//Logger
//when using "morgan" middleware call it with
//a String that describes the formatting of the logs


const app=express();

//URL (uniform resource locator)

//ROUTES 
//A route is a function that creates a response 
//for a specific combination of HTTP verb(method)
//and URL path

//the following method "get" is named after the 
//HTTP verb.There is similar method for each
//verb(e.g GET,PUT,POST,DELETE,OPTION etc)

app.set("view engine","ejs");
app.get("/",(request,response)=>{
    response.render("welcome");
});

app.get("/contact_us",(request,response)=>{
    console.log("URL QUERY:",request.query);
    response.render("contactUs");
});

app.get("/thank_you",(request,response)=>{
    //response.send("Thank you for submitting");
    const { fullName, favouriteColour, message } = request.query;
   response.render("thankYou", {
    fullName: fullName,
    favouriteColour: favouriteColour,
    message: message,
   });

});


const PORT=3000;
const ADDRESS="localhost";

app.get("/hello_world",(request,response)=>{

    response.send("LOve you, World!");
});

app.listen(PORT,ADDRESS,()=>{
    console.log(`server listening on http://${ADDRESS}:${PORT}`)

});