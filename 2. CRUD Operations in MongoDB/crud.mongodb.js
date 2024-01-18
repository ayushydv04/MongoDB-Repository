// ****************CREATE**************

//To create a New Database or use a existing one
use("CrudDB")

//To create a new collection or use already existing one
db.createCollection("courses")

//To insert one
db.courses.insertOne({
    name: "Web Dev",
    price: 0,
    assignment: 15,
    projects: 35
})


//To insert many
db.courses.insertMany([
    {
      "name": "Web Dev",
      "price": 0,
      "assignment": 15,
      "projects": 35
    },
    {
      "name": "Database Management",
      "price": 0,
      "assignment": 20,
      "projects": 30
    },
    {
      "name": "Mobile App Development",
      "price": 0,
      "assignment": 18,
      "projects": 32
    },
    {
      "name": "Machine Learning",
      "price": 0,
      "assignment": 25,
      "projects": 25
    },
    {
      "name": "Network Security",
      "price": 0,
      "assignment": 22,
      "projects": 28
    },
    {
      "name": "Data Visualization",
      "price": 0,
      "assignment": 17,
      "projects": 33
    },
    {
      "name": "Cloud Computing",
      "price": 0,
      "assignment": 21,
      "projects": 29
    },
    {
      "name": "Artificial Intelligence",
      "price": 0,
      "assignment": 23,
      "projects": 27
    },
    {
      "name": "Cybersecurity",
      "price": 0,
      "assignment": 19,
      "projects": 31
    },
    {
      "name": "Software Engineering",
      "price": 0,
      "assignment": 24,
      "projects": 26
    }
  ]
  )


// ****************READ**************

//To read we use find() function


//To read all the data with price:0
let a = db.courses.find({price:0})
console.log(a)


//To read the number of values matching 
let b = db.courses.find({price:0})
console.log(b.count())


//To get result set
let a = db.courses.find({name:"Web Dev"})
console.log(a.toArray())

//To find one
let c = db.courses.findOne({price:0})
console.log(c)


// ****************UPDATE**************

//Update One
db.courses.updateOne({price:0}, {$set:{price:100}})
db.courses.updateOne({name:"Web Dev"}, {$set:{name:"MongoDb"}})


//Update Many
db.courses.updateMany({price:0}, {$set:{price:1000}})


// ****************DELETE**************

//Delete One
db.courses.deleteOne({price:100})


//Delete Many
db.courses.deleteMany({price:1000})


//Read this document for more operations etc
// https://www.mongodb.com/docs/manual/reference/operator/query/