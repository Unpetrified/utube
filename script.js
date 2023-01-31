const btn = document.getElementById('btn');
const text = document.getElementById('txt');
const form = document.getElementById('form');

btn.addEventListener('click', () => {
  navigator.clipboard.writeText(text.innerHTML);
  alert('Link copied');
  window.open('https://tuberipper.com/');
})

form.addEventListener('submit', (e) => {
  e.preventDefault();
  let old = form['original'].value;
  var code = old.split('.com/live/')[1].split('?')[0];
  
  var newLink = 'https://youtu.be/'+code;
  
  text.innerHTML = newLink;
  
});