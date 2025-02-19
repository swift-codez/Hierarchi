let totaram = document.querySelector(".aOfTotaram");  // Selects the button
let totaramClass = document.querySelector(".totaramSetContainer"); // Selects the hidden container
let totaramDiv = document.querySelector("#vithkid1") //selecyt the div for the totaram

totaram.addEventListener("click", () => {  

    console.log("Button clicked!");
    totaramClass.classList.remove("hide");  // Removes the "hide" class
    totaramDiv.classList.add("after")

});
