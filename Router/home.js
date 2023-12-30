const express=require('express')
const { homeGet, homePost } = require('../Controller/homecontroller')
const router=express.Router()


router.get('/',homeGet)
router.post('/',homePost)

module.exports=router