
const button_arr=document.querySelectorAll(".drum");
var sz=button_arr.length;

for(var i=0;i<sz;i++){
  button_arr[i].addEventListener("click" , handleClick);
}

function handleClick() {

  var d=this.innerHTML;
  fn(d);
  btn_animation(d);
}

document.addEventListener("keypress", function(event){
  fn(event.key);
  btn_animation(event.key);
});

function btn_animation(className) {
  var ch=document.querySelector("." + className);
  ch.classList.add("pressed");

  setTimeout(function(){
    ch.classList.remove("pressed");
  },100);
}


function fn(key){

  switch(key){
    case "w" :
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

      case "a" :
        var kick=new Audio("sounds/kick-bass.mp3");
        kick.play();
      break;

      case "s" :
        var snare=new Audio("sounds/snare.mp3");
        snare.play();
      break;

      case "d" :
        var tom1=new Audio("sounds/tom-1.mp3");
        tom1.play();;
      break;


      case "j" :
        var tom2=new Audio("sounds/tom-2.mp3");
        tom2.play();
      break;

      case "k" :
        var tom3=new Audio("sounds/tom-3.mp3");
        tom3.play();
      break;

      case "l" :
        var tom4=new Audio("sounds/tom-4.mp3");
        tom4.play();
      break;
    }

}
