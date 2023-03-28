// Dropdown button
const dropdownButton = document.querySelector('button.dropdown__button');

// Dropdown list
const dropdownContent = document.querySelector('ul.dropdown__menu');

// .burgers__component
burgersComponent = document.querySelector('li.burgers__component');

// Event Listener
dropdownButton.addEventListener("click", onClick);

//Function
function onClick(){

     if(dropdownContent.classList.contains("dropdown__menu--visible")){
        dropdownContent.classList.remove("dropdown__menu--visible");
        dropdownButton.textContent = "Details";
        dropdownButton.style.top = 210;
        burgersComponent.style.paddingBottom = 20;


    } else {
        dropdownContent.classList.add("dropdown__menu--visible");
        dropdownButton.style.top = 350;
        dropdownButton.textContent = "Reduce";
        burgersComponent.style.paddingBottom = 60;
    }
}       