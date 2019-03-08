
/* I task */
function numPrompt() {
  let value;
  while((value = prompt('Enter number:')) < 100) {
    alert('false!');
  }
  alert('TRUE!');
}
numPrompt();


/* II task */
for (let i = 2; i <= 100; i++) {
  let prime = true;

  for (let j = 2; j < i; j++) {
    if (i % j === 0) {
      prime = false;
      break;
    }
  }

  if (prime) {
    console.log(i);
  }

  prime = false;
}


/* III task */
for (let i = 1; i <= 100; i++) {
  if(i % 3 == 0) {
    console.log('Fizz');
  } else if (i % 5 == 0) {
    console.log('Buzz');
  } else if ((i % 3 == 0) && (i % 5==0)) {
    console.log('Buzz');
  } else { console.log(i);}
  }
