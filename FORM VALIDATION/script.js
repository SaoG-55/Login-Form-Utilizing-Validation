const form=document.getElementById('form');
const username=document.getElementById('username');
const email=document.getElementById('email');
const password=document.getElementById('password');
const password2=document.getElementById('password2');

form.addEventListener('submit',function(e)
{
    e.preventDefault();
    checkInput();
});
// prevent from submiting the form 
//when the submit button is clicked

//func to check inputs

function checkInput()
{
    const  unameValue=username.value.trim();
    const  emailValue=email.value.trim();
    const  pswdValue=password.value.trim();
    const  pswd2Value=password2.value.trim();
    //trim()->to remove white spaces


    if(unameValue==='')
    {
        //show error
        //show error class
        setErrorFor(username,'Username cannot be blank');
        //custom funs
    }

    else
    {
        //show success class
        setSuccessFor(username);
        //custom funs
    }


   if(emailValue === '') 
   {
		setErrorFor(email, 'Email cannot be blank');
	} 
	else if (!isEmail(emailValue)) 
	{
		setErrorFor(email, 'Not a valid email');
	} 
	else
	 {
		setSuccessFor(email);
	 }


     if(pswdValue==='')
     {
     	setErrorFor(password,'Password cannot be blank')
     }

     else if(!isPasswordValid(pswdValue))
     {
     	setErrorFor(password,'Password must contain atleast one uppercase,lowercase,digit and a special character! ')
     }

     else
     {
     	setSuccessFor(password);
     }


    if(pswd2Value==='')
     {
     	setErrorFor(password2,'Password cannot be blank')
     }

    else if(pswd2Value!=pswdValue)
     {
     	setErrorFor(password2,'Passwords do not match')
     }
    else
    {
    	setSuccessFor(password2);
    }
}

function setErrorFor(data,message)
{
    const formControl=data.parentElement;//.form-control->parent of data->username(input)
    const small=formControl.querySelector('small');
    
    //add error msg inside small
    small.innerText=message;

    formControl.className ='form-control error'; //changes the class name from form-control to form-control error so that css can apply error color
}

function setSuccessFor(data) 
{
	const formControl=data.parentElement;//form-control
	formControl.className='form-control success';
}

function isEmail(email) 
{
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

function isPasswordValid(password)
{
	return  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*]).{8,}$/.test(password);
}