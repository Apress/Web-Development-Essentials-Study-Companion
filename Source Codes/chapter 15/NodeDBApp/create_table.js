const sqlite3 = require("sqlite3");

const db = new sqlite3.Database("mydb.sqlite");

db.run(`CREATE TABLE IF NOT EXISTS Employees (
    EmployeeId INTEGER PRIMARY KEY,
    FirstName   VARCHAR (20) NOT NULL,
    LastName  VARCHAR (20) NOT NULL,
    Title  VARCHAR (30),
    Phone    VARCHAR (24),
    Salary   NUMERIC (8, 2)
)`, (err) => {
  if (err) {
    console.error("Error creating table:", err.message);
  } else {
    console.log("Table created successfully");
  }
});

db.close();


