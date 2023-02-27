/* Created by Tivotal */

const toggle = document.querySelector(".toggle");
const body = document.querySelector("body");

//on page load we will check the storage contains the mode data
//if it present we will apply it for the body as follows
let getmode = localStorage.getItem("mode");
if (getmode && getmode == "dark") {
  //if it present
  body.classList.add("dark");
  //making the toggle button active
  toggle.classList.add("active");
}

toggle.addEventListener("click", () => {
  toggle.classList.toggle("active");
  body.classList.toggle("dark");

  if (body.classList.contains("dark")) {
    //if body has class called dark we will store it in staorage
    localStorage.setItem("mode", "dark");
  } else {
    //if body does not contains dark mode
    localStorage.setItem("mode", "light");
  }

  //now we stored the theme mode successfully
});
