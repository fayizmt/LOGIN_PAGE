const express = require('express')
const session=require('express-session')
const nocache=require('nocache')
const dotenv=require('dotenv').config()
const login=require("./Router/login")
const logout=require('./Router/logout')
const signup=require('./Router/signup')
const home=require('./Router/home')
const path =require('path')


const port=process.env.PORT||7000

const app = express()

app.use(nocache());
app.use(session({
    secret: 'fayis',
    resave: false,
    saveUninitialized: true,
  }))
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname,'public')))

app.set('view engine','ejs')
app.set('Views','Views')

app.use('/',login)
app.use('/home',home)
app.use('/signup',signup)
app.use('/logout',logout)


app.listen(port,()=>{
    console.log(`app is listening at ${port}`);
})