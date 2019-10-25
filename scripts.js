
function buttonAnimation(currentKey) {

    let activeButton = document.querySelector("." + currentKey);
  
    activeButton.classList.add("clicked");
  
    setTimeout(function() {
      activeButton.classList.remove("clicked");
    }, 100);
  
  }
  

let numberOfMeowuttons = document.querySelectorAll(".meow").length;

for (var i = 0; i < numberOfMeowButtons; i++) {

  document.querySelectorAll(".meow")[i].addEventListener("click", function() {

    let buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);

  });

}