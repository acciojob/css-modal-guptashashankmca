//your JS code here. If required.
let modal = document.querySelector('.modal');
let openBtn = document.getElementById('openModal');
let closeBtn = document.querySelector('.close-modal');

openBtn.addEventListener('click', function() {
  // code to open the modal
});

closeBtn.addEventListener('click', function() {
  // code to close the modal
});

openBtn.addEventListener('click', function() {
  modal.style.display = "block";
});

closeBtn.addEventListener('click', function() {
  modal.style.display = "none";
});

window.addEventListener('click', function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
});



