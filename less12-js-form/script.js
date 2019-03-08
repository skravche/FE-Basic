function errorBorder(input) {

  let errName = input;
  errName.style.border = "1px solid red";
}

function resetBorderError(input) {
  let noErrName = input;
  noErrName.style.border = "1px solid grey";
}

function validateform(){
  var errors = [];
  var textError = 'check';

  function checkName(){
    var name=document.regForm.first_name.value;

    if (!name) {
      textError = 'Name can\'t be blank';
      errorBorder(document.regForm.first_name);
      errors[errors.length] = textError;
    } else {
      textError = '';
      resetBorderError(document.regForm.first_name);
    }
    document.getElementById("fname-error").innerHTML = textError;
  }
  checkName();

  function checkLastName (){
    var lastName=document.regForm.last_name.value;

    if(!lastName){
      textError = 'Last name can\'t be blank';
      errorBorder(document.regForm.last_name);
      errors[errors.length] = textError;
    } else {
      textError = '';
      resetBorderError(document.regForm.last_name);
    }
    document.getElementById("lname-error").innerHTML = textError;
  //  textError = (!lastName)? 'Last name can\'t be blank' : ' ';
  //  document.getElementById("lname-error").innerHTML = textError;
  }
  checkLastName();

  function checkDate() {
    var dateB = document.regForm.bday.value;

    console.log (dateB);
    //  var datePat = /^(\d{1,2})(\/|-)(\d{1,2})\2(\d{2}|\d{4})$/;
    if (dateB == "") {
      textError = 'Please enter the Date';
      errors[errors.length] = textError;
    } else { textError = ''; }
    document.getElementById("bday-error").innerHTML = textError;
  }
  checkDate();

  function checkButton(){
    var radio1  = document.getElementById('ch1').checked;
    var radio2  = document.getElementById('ch2').checked;

    if(radio1 == false && radio2 == false){
      textError = 'Select button Please';
      errors[errors.length] = textError;
    } else { textError = ''; }
    document.getElementById("radio-error").innerHTML = textError;
  }
  checkButton();

  function checkCountry(){
    let countryName = document.regForm.subject.value;

    if(countryName == 'Choose your country'){
      textError = 'Please select your country';
      errors[errors.length] = textError;
      errorBorder(document.regForm.subject);
    } else {
      textError = '';
      resetBorderError(document.regForm.subject);
    }
    document.getElementById("country-error").innerHTML = textError;
  }
  checkCountry();

  function checkEmail(email) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(document.regForm.email.value)){
      textError = '';
      resetBorderError(document.regForm.email);
    } else {
      textError = 'Your enter wrong email';
      errors[errors.length] = textError;
      errorBorder(document.regForm.email);
    }
    document.getElementById("email-error").innerHTML = textError;
  }
  checkEmail();

  function checkAddress (){
    var checkAddress=document.regForm.address.value;
    if(!checkAddress){
      textError = 'Enter your address Please';
      errorBorder(document.regForm.address);
      errors[errors.length] = textError;
    } else {
      textError = '';
      resetBorderError(document.regForm.address);
    }
    document.getElementById("address-error").innerHTML = textError;
  }
  checkAddress();

  function checkPassword (){
    var pass=document.regForm.password.value;
    var confPassword=document.regForm.confPassword.value;

    if(pass.length<6){
      textError = 'Password must be at least 6 characters long';
      errors[errors.length] = textError;
      errorBorder(document.regForm.password);
    } else {
      textError = '';
      resetBorderError(document.regForm.password);
    }
    document.getElementById("passname-error").innerHTML = textError;
    if(confPassword != pass){
      textError = 'Please repeate your password!';
      errors[errors.length] = textError;
      errorBorder(document.regForm.confPassword);
    } else {
      textError = '';
      resetBorderError(document.regForm.confPassword);
    }
    document.getElementById("confPass-error").innerHTML = textError;
  }
  checkPassword();

  console.log(errors);
  if (errors.length > 0) {
    return false;
  } else {
    alert('Validation passed')
  }
}
