const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
  
  e.preventDefault();
  let old = form['original'].value;
  try {
  
  var code = old.split('.com/live/')[1].split('?')[0];
  
  var newLink = 'https://youtu.be/'+code;
  
  navigator.clipboard.writeText(newLink);
  alert('Link copied');
  window.open('https://tuberipper.com/');

  } catch (e) {
    alert('Check the link to make sure it is correct')
  }
});