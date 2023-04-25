const express=require('express');
const bodyParser=require('body-parser');
const teachersRoutes=require('./routes/teachers.js');

const app=express();   

app.use(bodyParser.json());     //used to read json file
app.use('/teachers',teachersRoutes);

app.get('/',(req,res)=>{
    res.send('Hello');
})

app.listen(3000,()=>console.log('Server running on port: 3000'));