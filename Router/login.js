const express=require('express')
const router=express.Router()
const {loginget}=require('../Controller/logincontroller')
// const path=require('path')


router.get('/',loginget)

module.exports=router