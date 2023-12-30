const loginget=(req,res)=>{
    if(req.session.email){
        res.redirect('/home')
    }
    else{
        res.render('login')
    }

}

module.exports={loginget}