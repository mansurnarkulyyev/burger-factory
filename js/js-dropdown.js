// Dropdown button
const dropdownButtons = document.querySelectorAll('button.dropdown__button');

// Dropdown list
const dropdownContents = document.querySelectorAll('ul.dropdown__menu');

// .burgers__component
const burgersComponents = document.querySelectorAll('li.burgers__component');

// Event Listener
dropdownButtons.forEach((button, index) => {
  button.addEventListener("click", () => onClick(index));
});

// Function
function onClick(index){

  if(dropdownContents[index].classList.contains("dropdown__menu--visible")){
    dropdownContents[index].classList.remove("dropdown__menu--visible");
    dropdownButtons[index].textContent = "Details";
    dropdownButtons[index].style.top = 210;
   
  } else {
    dropdownContents[index].classList.add("dropdown__menu--visible");
    dropdownButtons[index].style.top = 350;
    dropdownButtons[index].textContent = "Reduce";
   
  }
}
