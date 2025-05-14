const express = require('express');
const app = express();


//middleware
app.use(express.json());

//routes
const blog = require('./routes/blog');
app.use('/api/v1',blog);

const dbConnect = require('./config/database');
dbConnect();

app.listen(6000, ()=>{
  console.log('App is running on 6000 port')
})

app.get('/',(req,res)=>{
  res.send('<h1>This is home page</h1>');
})