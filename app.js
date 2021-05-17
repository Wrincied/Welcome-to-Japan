const express = require('express')
const app = express()
const port = 5000
var path = require('path')

app.use(express.static('src'))


app.get('/', function(req, res){
  res.send('Hello');
});

app.get('/main', function(req, res) {
  res.sendFile(__dirname + "/index.html");
  console.log('Successful connection html')
})
app.get('/main', function(req, res){ 
  res.sendFile(__dirname + "/index.min.css")
  console.log('Successful connection css')
});


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
  console.log('Successful')
})

