const express = require('express');
const app = express();

//will look at body of post request that make accessing values easy
app.use(express.urlencoded({extended: false})) //global middleware 


//middleware router level middleware
function getWeather(req, res, next){
  req.visitorWeather = true;
  if(req.visitorWeather){
      res.send('Come back when it is not raining')
  } else{
      next()
  }
};


//ordering matters
//you can list as many functions as you want
app.get('/', getWeather ,(req, res) => {
    res.send(`
    <h1>What oclor is the sky on a clear day</h1>
    <form action ="/result" method="POST">
    <input type="text" name="color">
    <button> Submit Answer</button>
    </form>
    <p> ${req.visitorWeather ? 'It is raining': 'it is not raining'}
    `)
});

app.get('/about', (req, res) => {
    res.send('Thanks for learning more about us.')
});

app.post('/result', (req, res) => {
  if(req.body.color.trim().toUpperCase() === 'BLUE'){
      res.send("congrats")
  }else{
      res.send('incorrect')
  }
});

app.listen(3000);