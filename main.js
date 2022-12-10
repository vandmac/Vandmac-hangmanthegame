const guesWord = 'madagaskar';
console.log(guesWord);
const keyboardArray = [];

const keyboard = document.getElementById('keyboard');
let letterKey;
let letterToAdd;
for (let i = 65; i < 91; i++) {
  letterKey = document.createElement('button');
  letterKey.classList.add('letter');
  letterToAdd = String.fromCharCode(i);
  keyboardArray.push(letterToAdd);
  letterKey.innerHTML = letterToAdd;
  keyboard.appendChild(letterKey);
}
