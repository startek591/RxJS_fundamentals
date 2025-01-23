// infinite list of values

function handleButtonClick(event) {
  console.log('Button clicked!');
  console.log(event);
}

let button = document.querySelector('#button1');

button?.addEventListener('click', handleButtonClick);
