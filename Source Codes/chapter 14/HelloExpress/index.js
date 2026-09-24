const express = require('express');
const app = express();
app.use (express.json());

app.post('/', function (req, res) {
   console.log(req.body);
   res.send(req.body);
}); 

const server = app.listen(3000, function () {
   console.log("Express App running at http://127.0.0.1:3000/");
});
