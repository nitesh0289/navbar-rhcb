// getting an access of particular Node

//getElementsByClassName
//getElementsByTagName
//querySelector

// alter or update the nodes

// classList - shows all the class
// contains - checks the classList for specific class and returns True/False
// add - it will going to add class
// remove - it will going to remove a class

const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function () {
  //   console.log(links.classList.contains("show-links"));
  //   if (links.classList.contains("show-links")) {
  //     links.classList.remove("show-links");
  //   } else {
  //     links.classList.add("show-links");
  //   }

  links.classList.toggle("show-links");
});
