document.querySelectorAll('.drum').forEach(element => {
  element.addEventListener('click',function(){

    let buttonInnerHTML=this.innerHTML;
    makesound(buttonInnerHTML)
    makeAnimation(buttonInnerHTML)
  })
});


addEventListener('keydown',function(event){
  makesound(event.key);
  makeAnimation(event.key)
})

function makesound(key) {
  console.log(key);
  switch (key) {
    case "w":
      sound = new Audio(`sounds//tom-1.mp3`)
      sound.play();
      break;
      case "a":
        sound = new Audio(`sounds//tom-2.mp3`);
        sound.play();
      break;
      case "s":
        sound = new Audio(`sounds//tom-3.mp3`);
        sound.play();
      break;
      case "d":
        sound = new Audio(`sounds//tom-4.mp3`);
        sound.play();
      break;
      case "j":
        sound = new Audio(`sounds//snare.mp3`);
        sound.play();
      break;
      case "k":
        sound = new Audio(`sounds//crash.mp3`);
        sound.play();
      break;
      case "l":
        sound = new Audio(`sounds//kick-bass.mp3`);
        sound.play();
      break;
  
    default:
      console.log("Invalid click");
      break;
  }
}

function makeAnimation(key){
  let activeButton= document.querySelector("."+key)
  activeButton.classList.add("pressed");
  setTimeout(()=>{
    activeButton.classList.remove('pressed')
  },100)

}
