const express = require('express');
const router = express.Router();
const { signupget, signupPost } = require('../Controller/signupcontroller');
const fs = require('fs');

router.get('/', signupget);
router.post('/',signupPost)



module.exports = router;
