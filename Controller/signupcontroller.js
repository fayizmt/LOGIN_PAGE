const fs = require('fs');
const signupget=(req,res)=>{
    if(req.session.email){
        res.redirect('/home')
    }
    else{
        res.render('signup')
    }
}
const signupPost=('/', (req, res) => {
    const reqdata = req.body;
    const {name, email, number, password, confirmPassword } = req.body;
    // console.log( email, number, password, confirmPassword );
    let userData = [];
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const numberRegex = /^[\s()+-]*([0-9][\s()+-]*){10,10}$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  
    if (name == ''|| email == '' || number == '' || password == '' || confirmPassword == '') {
      res.render('signup', { error: 'Please provide all details' });
      
    }
     else {
      userData.push(reqdata);
      res.redirect('/');
  
      fs.readFile('./Model/data.json', 'utf-8', (err, data) => {
        if (err) {
          console.log(err);
        } else {
          const parseData = JSON.parse(data);
          const concatData = userData.concat(parseData);
          let stringData = JSON.stringify(concatData, null, 2);
  
          fs.writeFile('./model/data.json', stringData, (err) => {
            if (err) {
              console.log('Error found');
            } else {
              console.log(stringData);
            }
          });
        }
      });
    }
  });

module.exports={signupget,signupPost}