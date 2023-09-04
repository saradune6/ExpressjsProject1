const express= require('express');
const port = process.env.PORT || 5000;
const app = express();
const path = require('path');
const hbs = require('hbs');

//public static path
const static_path = path.join(__dirname , '../public');
const template_Path = path.join(__dirname,"../templates/views");
const Partials_path = path.join(__dirname,"../templates/partials");

app.set('view engine','hbs');
app.set('views', template_Path);

hbs.registerPartials(Partials_path);

app.use(express.static(static_path));

app.get('/',(req,res)=>{
    res.render('index')
});

app.get("/about",(req,res)=>{
    res.render('about')
});

app.get('/weather',(req,res)=>{
    res.render('weather')
});

app.get('*',(req,res)=>{
    res.render('404')
});


app.listen(port,()=>console.log('Server Started'));