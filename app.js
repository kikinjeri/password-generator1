const h1 = document.createElement('h1');
h1.innerText = "Password Generator";
document.getElementById('container').appendChild(h1);


const h2 = document.createElement('h2');
h2.innerText = "Generate a password";
document.getElementById('container').appendChild(h2);

const input = document.createElement('input');
input.placeholder = "Your Password";
document.getElementById('container').appendChild(input);

const button = document.createElement('button');
button.innerText = "Generate Password";