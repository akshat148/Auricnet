document.addEventListener("DOMContentLoaded", () => {
    const name = document.getElementById("name");
    const squares = document.getElementById("squares");
    const button = document.getElementById("contact-btn");
  
    name.addEventListener("animationend", () => {
      squares.classList.remove("hidden");
      button.classList.remove("hidden");
    });
  });
// Get the modal
var modal = document.getElementById("contactPopup");

// Get the button that opens the modal
var btn = document.getElementById("contactButton");

// Get the <span> element that closes the modal
var span = document.getElementById("closePopup");

// When the user clicks the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
  