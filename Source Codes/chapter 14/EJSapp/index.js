const { name } = require('ejs');
const express = require('express');
const app = express();
app.use(express.static('public'));

app.set('view engine', 'ejs');

 app.get('/:id', (req, res) => {
    const id = req.params.id;
    if (id === 'err') {
        throw new Error('Invalid ID');
    }
    res.render('index');
}); 

app.use((err, req, res, next) => {
  console.log(err);
  res.json({ error: err.message });
});

app.get('/', (req, res) => {
    res.render('index');
});
app.listen(3000, () => {
    console.log('Server running on port 3000');
});