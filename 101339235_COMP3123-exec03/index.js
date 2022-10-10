var http = require("http");
const employees = require("./Employee");
//TODO - Use Employee Module here
console.log("Lab 03 -  NodeJs");
let employee = require("./Employee")

//TODO - Fix any errors you found working with lab exercise

//Define Server Port
const port = process.env.PORT || 8081

//Create Web Server using CORE API
const server = http.createServer((req, res) => {
    if (req.method !== 'GET') {
        res.end()
    } else {
        if (req.url === '/') {
            //TODO - Display message "<h1>Welcome to Lab Exercise 03</h1>"
            res.write("<h1>Welcome to Lab Exercise 03</h1>")
        }

        if (req.url === '/employee') {
            //TODO - Display all details for employees in JSON format
            res.write("<h1>Employee</h1>")
            res.write(JSON.stringify(employee))
        }

        if (req.url === '/employee/names') {
            //TODO - Display only all employees {first name + lastname} in Ascending order in JSON Array
            //e.g. [ "Ash Lee", "Mac Mohan", "Pritesh Patel"]
            res.write(JSON.stringify(employee.sort((a, b) => a.firstName.localeCompare(b.firstName))))
        }

        if (req.url === '/employee/totalsalary') {
            //TODO - Display Sum of all employees salary in given JSON format 
            //e.g. { "total_salary" : 100 }
            let sum = 0
            res.write(JSON.stringify(employee.reduce((sum, employee) => { return sum + employee.Salary }, 0)))
        }
    res.end()
    }
})

server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})