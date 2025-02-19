let totaram = document.querySelector(".aOfTotaram");  // Selects the button
let totaramClass = document.querySelector(".totaramSetContainer"); // Selects the hidden container

totaram.addEventListener("click", () => {  

    console.log("Button clicked!");
    totaramClass.classList.remove("hide");  // Removes the "hide" class
});
