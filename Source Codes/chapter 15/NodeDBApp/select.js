const sqlite3 = require("sqlite3");

const db = new sqlite3.Database("mydb.sqlite");

const selectQry = "SELECT * FROM Employees WHERE Title=?";
const data = ["Manager"];

console.log("Employees with Title as Manager...");

db.each(
    selectQry,
    data,
    (err,row)=>{
        if(err){
            console.log("Error fetching row");
        }        else{
            console.log(`First Name: ${row.FirstName}, Salary: ${row.Salary}`);
        }
    },

    (err,count)=>{
        if(err){
            console.log("Error fetching rows");
        }        else{
            console.log(`Total rows processed: ${count}`);
        }
    }
);

db.close();


