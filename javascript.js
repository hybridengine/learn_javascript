const song = "Fight the Youth";
const score = 9;
const highestScore = 10;
const output = `I like the song ${song}. I gave it a score of ${
  (score / highestScore) * 100
}%.`;
console.log(output); // "I like the song Fight the Youth. I gave it a score of 90%."

// https://javascript.info/switch
// Rewrite the "switch" into an "if"

/* original code
switch (browser) {
  case 'Edge':
    alert( "You've got the Edge!" );
    break;

  case 'Chrome':
  case 'Firefox':
  case 'Safari':
  case 'Opera':
    alert( 'Okay we support these browsers too' );
    break;

  default:
    alert( 'We hope that this page looks ok!' );
}
*/

if (browser === 'Edge') {
  alert("You've got the Edge!");
} else if ()(browser === 'Chrome') ||
(browser === 'Firefox') ||
(browser === 'Safari') ||
(browser === 'Opera')) {
  alert('Okay we support these browsers too');
} else {
  alert('We hope that this page looks ok!')
}

// Rewrite "if" into "switch"

/* let a = +prompt('a?', '');

if (a == 0) {
  alert( 0 );
}
if (a == 1) {
  alert( 1 );
}

if (a == 2 || a == 3) {
  alert( '2,3' );
}
*/
let a = +prompt('a?', '');

switch(a) {
  case 0:
    alert(0);
    break;
  case 1:
    alert(1);
    break;
  case 2:
  case 3:
    alert('2,3');
    break;
}
