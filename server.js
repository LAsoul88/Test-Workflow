const express = require('express');
const app = express();
const PORT = 4000;

app.get('/', (req, res) => res.send('Test page'));


app.listen(PORT, function() {
    console.log(`Connected to Port ${PORT} Yay`);
});