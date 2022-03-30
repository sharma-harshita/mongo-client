// console.log("Hello world");

// Mongo Client : module present inside mongodb library

// it allows you to commnunicate and make all the queries from VS code instead of making the queries from mongo shell.


// create the connection with the mongo
// const mongoClient = require("mongodb").MongoClient;

// const mongoUrl = "mongodb://localhost:27017";

// mongoClient.connect(mongoUrl,(err, suc)=>{
//     if (err) console.log(err);
//     console.log("Connected");
// })



// create the database and connect

// const mongoClient = require("mongodb").MongoClient;

// const mongoUrl = "mongodb://localhost:27017/test";

// mongoClient.connect(mongoUrl,(err, suc)=>{
//     if (err) console.log(err);
//     console.log("Connected and database is created");
// })



// create a collection inside it
// const mongoClient = require("mongodb").MongoClient;

// const mongoUrl = "mongodb://localhost:27017";

// mongoClient.connect(mongoUrl,(err, suc)=>{  //mongo command
//     if (err) console.log(err);
//     const actualDb = suc.db("school");        //use test 
//     actualDb.createCollection("students", (err, suc)=>{        //db.createCollection()
//         if (err) console.log(err);
//         console.log("Collection is created");
//     })
//     actualDb.createCollection("teachers", (err, suc)=>{
//         if (err) console.log(err);
//         console.log("Collection is created");
//     })
// })



// inserting the document inside the collection INSERT 

// const mongoClient = require("mongodb").MongoClient;

// const mongoUrl = "mongodb://localhost:27017";

// mongoClient.connect(mongoUrl,(err, suc)=>{  //mongo command
//     if (err) console.log(err);
//     const actualDb = suc.db("school");        //use test 
//     // const student = {roll : 121, name: "John", class:"X"}
//     // actualDb.collection("students").insertOne(student, (err, suc)=>{
//     //     if (err) console.log(err);
//     //     console.log("Document inserted successfully");
//     // })
//     const studentsData = [{roll : 101, name : "Doe", class:"XI"},{roll : 102, name : "Rahul", class:"I"}]
//     actualDb.collection("students").insertMany(studentsData,(err, suc)=>{
//         if (err) console.log(err);
//         console.log("Data is inserted successfully.")
//     })
// })


// Query the documents  GET

// const mongoClient = require("mongodb").MongoClient;

// const mongoUrl = "mongodb://localhost:27017";

// mongoClient.connect(mongoUrl,(err, suc)=>{  //mongo command
//     if (err) console.log(err);
//     const actualDb = suc.db("school");        //use test 
//     actualDb.collection("students").find({name:"Rahul"}).toArray((err, result)=>{
//         if (err) console.log(err);
//         console.log(result);
//     })
// })

// if the collection is empty , then the output will not be blank like mongo shell, instead it will return you an empty array


// Updating the document

const mongoClient = require("mongodb").MongoClient;

const mongoUrl = "mongodb://localhost:27017";

mongoClient.connect(mongoUrl,(err, suc)=>{  //mongo command
    if (err) console.log(err);
    const actualDb = suc.db("school");        //use test
    let query = {roll : 121};
    let newData = {name : "Rohan"}
    actualDb.collection("students").updateOne(query,{$set:newData},(err, result)=>{
        if (err) console.log(err);
        console.log(result);
    })
})