// Assignment Code

// Write password to the #password input

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function password_generator( len ) {
  var length = (len)?(len):(10);
  var string = "abcdefghijklmnopqrstuvwxyz"; //to upper 
  var numeric = '0123456789';
  var punctuation = '!@#$%^&*()_+~`|}{[]\:;?><,./-=';
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  var generateBtn = document.querySelector("#generate");
  var character = passwordText;
  var crunch = true;
  passwordText.value = password;
  while( password.length<length ) { 
      entity1 = Math.ceil(string.length * Math.random()*Math.random());
      entity2 = Math.ceil(numeric.length * Math.random()*Math.random());
      entity3 = Math.ceil(punctuation.length * Math.random()*Math.random());
      hold = string.charAt( entity1 );
      hold = (password.length%2==0)?(hold.toUpperCase()):(hold);
      character += hold;
      character += numeric.charAt( entity2 );
      character += punctuation.charAt( entity3 );
      password = character;
  }
  password=password.split('').sort(function(){return 0.5-Math.random()}).join('');
  return password.substr(0,len);
}

console.log( password_generator() );