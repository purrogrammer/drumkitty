let numberOfMeowButtons = document.querySelectorAll(".meow").length;

for (let i = 0; i < numberOfMeowButtons; i++) {

  document.querySelectorAll(".meow")[i].addEventListener("click", function() {

   let buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  });

}

document.addEventListener("keypress", function(event) {
    makeSound(event.key);
    buttonAnimation(event.key);
  });

  function makeSound(key) {

    switch (key) {
      case "m":
        let tom1 = new Audio("sounds/TomCat-1.mp3");
        tom1.play();
        break;
  
      case "e":
        let tom2 = new Audio("sounds/TomCat-2.mp3");
        tom2.play();
        break;
  
      case "o":
        let tom3 = new Audio("sounds/TomCat-3.mp3");
        tom3.play();
        break;
  
      case "w":
       let tom4 = new Audio("sounds/TomCat-4.mp3");
        tom4.play();
        break;
  
      case "c":
        //kitten sound
       let snare = new Audio("sounds/Kitten-meow.mp3");
        snare.play();
        break;
  
      case "a":
        let crash = new Audio("sounds/CrashCat.mp3");
        crash.play();
        break;
  
        //roar sound
      case "t":
        let kick = new Audio("sounds/Lion-bass.mp3");
        kick.play();
        break;

        default: console.log(key);
     }
  }

function buttonAnimation(currentKey) {

    let activeButton = document.querySelector("." + currentKey);
  
    activeButton.classList.add("pressed");
  
    setTimeout(function() {
      activeButton.classList.remove("pressed");
    }, 100);
  
  }