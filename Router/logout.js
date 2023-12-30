const express=require('express')
const router=express.Router()
const {logoutget}=require('../Controller/logoutcontroller')
// const path=require('path')


router.get('/',logoutget)

module.exports=router