const passwordValidation = document.getElementById('passwordValidation');
const modal = document.getElementById('modals');
const openModalBtn =  document.getElementById('openModalBtn');
const validationMessage = document.getElementById('validationMessage');
const quoteImage = document.getElementById('quoteImage');
const changeMe = document.getElementById('changeMe');
const mypassword = document.getElementById('mypassword');





//Opening a modal using button
function showModal()
{
   modal.style.display = "block";
}
//hiding a modal
function closeModal()
{
    modal.style.display = "none";
}

function changeMyColor()
{
    changeMe.style.color = "red";
}

function returnMyColor()
{
    changeMe.style.color = "white";
}

//confirm if password field value is more than  5 digit
mypassword.oninput = function()
{
    if (mypassword.value.length < 5)
{
    passwordValidation.textContent = "Password length should be more than 5 digit";
}
else
{
    passwordValidation.textContent = " ";
}
}


document.getElementById("myForm").addEventListener("submit", function(e) {
  e.preventDefault(); // Prevent form from submitting

//Regex to check for email
const myemailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const myemail = document.getElementById('myemail').value;
const error = document.getElementById('error');
//Setting email validation
if(myemailPattern.test(myemail))
{
    error.textContent = "valid email continue";
    error.style.color= "green";
}else
{
    error.textContent = "Please enter a valid email";
    error.style.color = "red";
}
});

