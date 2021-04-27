const express = require('express')
const app = express();


//ordering matters
app.get('/', (req, res) => {
    res.send('Welcome to our homepage')
});

app.get('/about', (req, res) => {
    res.send('Thanks for learning more about us.')
});

app.listen(3000)