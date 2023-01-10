const searchButton = document.querySelector('#search-button');
const buttonContent = document.querySelector('#search-button div');

//toggle the items inside the div when click
searchButton.addEventListener('click', toggleButton);

function toggleButton() {
  buttonContent.classList.toggle('loading');
}
