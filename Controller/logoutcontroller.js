const logoutget=(req,res)=>{
    req.session.destroy()
    res.redirect('/')
}

module.exports={logoutget}