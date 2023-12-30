const emailRejex=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const phoneNumberRegex = /^[\s()+-]*([0-9][\s()+-]*){10,10}$/;
const PasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;



const emailInput=document.getElementsByName('email')[0];
const emailLabel=document.querySelector('.emailLabel')

emailInput.addEventListener('blur',()=>{
    
    if(!emailRejex.test(emailInput.value)){
        emailLabel.innerHTML = 'Invalid Email Address'
    
    }
    else{
        console.log('hi');
        emailLabel.innerHTML = 'Email'
        
    }
})

const numberInput= document.getElementsByName('number')[0];
const mobLabel=document.querySelector('.mob')

numberInput.addEventListener('blur',()=>{
    
    if(!phoneNumberRegex.test(numberInput.value)){
        mobLabel.innerHTML = 'Invalid Mobile Number'
    
    }
    else{
    
        mobLabel.innerHTML = 'mob'
        
    }
})

const passwordInput=document.getElementsByName('password')[0]
const passwordLabel=document.querySelector('.passwordLabel')
passwordInput.addEventListener('blur',()=>{
    console.log('hi');
    if(!PasswordRegex.test(passwordInput.value)){
        passwordLabel.innerHTML ='Invalid Password'
        
    }
    else{
        passwordLabel.innerHTML ='Password'
        
    }
})

const confirmPasswordInput= document.getElementsByName('password-2')[0];
const confirmLabel=document.querySelector('.confirm')

confirmPasswordInput.addEventListener('blur',()=>{
    if(confirmPasswordInput.value !== passwordInput.value){
        confirmLabel.innerHTML='Incorrect Password'
    }
    else{
        confirmLabel.innerHTML=' Confirm Password'
    }
})



