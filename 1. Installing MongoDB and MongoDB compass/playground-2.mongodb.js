
// Select the database to use.
use('sigmaDatabase');

// Insert a few documents into the courses collection.
db.getCollection('courses').insertMany([
    {
      "Name": "Java",
      "Price": "20000",
      "Instructor": "Harry"
    },
    {
      "Name": "Python",
      "Price": "15000",
      "Instructor": "Emma"
    },
    {
      "Name": "C++",
      "Price": "18000",
      "Instructor": "James"
    },
    {
      "Name": "JavaScript",
      "Price": "22000",
      "Instructor": "Sophia"
    },
    {
      "Name": "HTML",
      "Price": "12000",
      "Instructor": "Liam"
    },
    {
      "Name": "CSS",
      "Price": "13000",
      "Instructor": "Olivia"
    },
    {
      "Name": "Ruby",
      "Price": "16000",
      "Instructor": "Mia"
    },
    {
      "Name": "C#",
      "Price": "19000",
      "Instructor": "Noah"
    },
    {
      "Name": "PHP",
      "Price": "17000",
      "Instructor": "Ava"
    },
    {
      "Name": "Swift",
      "Price": "21000",
      "Instructor": "William"
    }
]);


// Print a message to the output window.
console.log(`Done inserting data`);

