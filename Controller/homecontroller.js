const fs= require('fs')
const userData=JSON.parse(fs.readFileSync('./Model/data.json','utf-8'));

const homeGet=('/',(req,res)=>{
    if(req.session.email){
        res.render('home',{users:userData})
    }
    else{
        res.redirect('/')
    }
})
const homePost=('/',(req,res)=>{
    const {email,password}=req.body;
    const user=userData.find((val)=> val.email === email && val.password === password);
    
    if(user){
        req.session.email=user.email
        if(req.session.email){
            res.render('home',{users:userData})
        }
        else{
            res.redirect('/')
        }
        
    }
    else{
        res.redirect('/')
        console.log('User not found');
    }
})


module.exports={homeGet,homePost}
