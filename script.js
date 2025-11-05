let input = document.querySelector('#date');
let btn = document.querySelector('button');
let display = document.querySelector('#display');
let name = document.querySelector('#name');
let sounds = document.querySelector('#sounds');

const adult = "Adult";
const chlid = "Teenager";

btn.addEventListener('click', () => {

  if (name.value == '') {
    alert("First You Enter the Name And Date of brith");
  }
  else if (name.value != ' ') {

    let birthDate = new Date(input.value);
    let today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    let monthDiff = today.getMonth() - birthDate.getMonth();
    if (monthDiff === 0 && today.getDate() < birthDate.getDate()) {
      age--;
    }
    if (age >= 18) {

      display.innerHTML = `Hello ${name.value}! You are ${age} years old And he/she is a ${adult}`;
    }
    else {
      display.innerHTML = `Hello ${name.value}! You are ${age} years old And he/she is a ${chlid}..`;
    }
    sounds.innerHTML = '🔊';
  }


});
sounds.addEventListener('click', () => {
  speechSynthesis.speak(new SpeechSynthesisUtterance(display.innerHTML))
})
