// Dropdown button
const dropdownButtons = document.querySelectorAll('button.dropdown__button');

// Dropdown list
const dropdownLists = document.querySelectorAll('ul.dropdown__menu');

// Loop through each dropdown button and add event listener
dropdownButtons.forEach(function(button){
    button.addEventListener("click", function(){
        // Get the corresponding dropdown list for this button
        const dropdownList = this.nextElementSibling;

        // Toggle the dropdown visibility
        dropdownList.classList.toggle('dropdown__menu--visible');

        // Toggle the button text
    if (dropdownList.classList.contains('dropdown__menu--visible')) {
      this.dropdownButton.style.top = 350;
      this.dropdownButton.textContent = "Reduce";
      this.burgersComponent.style.paddingBottom = 60;
    } else {
      this.textContent = 'Details';
      this.dropdownButton.style.top = 210;
      this.burgersComponent.style.paddingBottom = 20;
    }
    })
})


// //Function
// function onClick(){

//      if(dropdownContent.classList.contains("dropdown__menu--visible")){
//         dropdownContent.classList.remove("dropdown__menu--visible");
//         dropdownButton.textContent = "Details";
//         dropdownButton.style.top = 210;
//         burgersComponent.style.paddingBottom = 20;


//     } else {
//         dropdownContent.classList.add("dropdown__menu--visible");
//         dropdownButton.style.top = 350;
//         dropdownButton.textContent = "Reduce";
//         burgersComponent.style.paddingBottom = 60;
//     }
// }       