use('Btech');

db.getCollection('specialization').insertMany([
    {
        "Reg. No": "100001",
        "Name": "William",
        "Course": "Full Stack Web Dev"
    },
    {
        "Reg. No": "100002",
        "Name": "Emma",
        "Course": "Software Methodologies"
    },
    {
        "Reg. No": "100003",
        "Name": "James",
        "Course": "Cloud Computing"
    },
    {
        "Reg. No": "100004",
        "Name": "Sophia",
        "Course": "Cyber Security"
    },
    {
        "Reg. No": "100005",
        "Name": "Liam",
        "Course": "Data Science"
    },
    {
        "Reg. No": "100006",
        "Name": "Olivia",
        "Course": "IOT"
    },
    {
        "Reg. No": "100007",
        "Name": "Mia",
        "Course": "Full Stack Web Dev"
    },
    {
        "Reg. No": "100008",
        "Name": "Noah",
        "Course": "Software Methodologies"
    },
    {
        "Reg. No": "100009",
        "Name": "Ava",
        "Course": "Cloud Computing"
    },
    {
        "Reg. No": "100010",
        "Name": "Benjamin",
        "Course": "Cyber Security"
    } 
])


console.log(`Done inserting Data`)