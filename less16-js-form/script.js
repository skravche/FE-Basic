function validateform(){

  var textError = 'check';

  function checkName(){
    var name=document.regForm.first_name.value;
    textError = (!name)? 'Name can\'t be blank' : '';
    document.getElementById("fname-error").innerHTML = textError;
  }
  checkName();

  function checkLastName (){
    var lastName=document.regForm.last_name.value;
    textError = (!lastName)? 'Last name can\'t be blank' : ' ';
    document.getElementById("lname-error").innerHTML = textError;
  }
  checkLastName();

//  function checkDate() {};

  function checkButton(){
    var radio1  = document.getElementById('ch1').checked;
    var radio2  = document.getElementById('ch2').checked;

    if(radio1 == false && radio2 == false){
      textError = 'Select button Please';
    } else {
      textError = '';
    }
    document.getElementById("radio-error").innerHTML = textError;
  }
  checkButton();

  function checkCountry(){
    let countryName = document.regForm.subject.value;
    textError = (countryName == 'Choose your country')? 'Please select your country' : '';
    document.getElementById("country-error").innerHTML = textError;
  }
  checkCountry();

  function checkEmail(email) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(document.regForm.email.value)){
      textError = '';
    } else {
      textError = 'Your enter wrong email';
    }
    document.getElementById("email-error").innerHTML = textError;
  }
  checkEmail();

  function checkAddress (){
    var checkAddress=document.regForm.address.value;
    textError = (!checkAddress)? 'Enter your address Please' : '';
    document.getElementById("address-error").innerHTML = textError;
  }
  checkAddress();

  function checkPassword (){
    var pass=document.regForm.password.value;
    var confPassword=document.regForm.confPassword.value;

    textError = (pass.length<6)? 'Password must be at least 6 characters long' : '';
    document.getElementById("passname-error").innerHTML = textError;

    textError  = (confPassword != pass)? 'Please check confirmed password!' : '';
    document.getElementById("confPass-error").innerHTML = textError;
  }
  checkPassword();

  if (textError === '') {
    alert('Check Cmplete');
  }
}



document.getElementById('mydiv').onmouseover = function() {
  this.style.borderColor = "blue";
}
