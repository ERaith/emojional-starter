//Define Variables needed for happyButton Functionality
const happyButton = document.querySelector(".happy");
const sillyButton = document.querySelector(".silly");
const cryingButton = document.querySelector(".crying");
const messageElement = document.querySelector('.message');
const happyMessage = ['You go!','Your smile just cheered me up!','YAY!'];
const sillyMessage = ['Interesting response','Sounds... good?','Me too.'];
const cryingMessage = ['Do you want to talk?','Keep your head up','We can cry together','What can I do?'];

function showResponse(messageArray){
  //Show Response
  var i = Math.floor(Math.random()*messageArray.length);
  messageElement.innerHTML = messageArray[i];
}
happyButton.addEventListener('click',function(){showResponse(happyMessage)});
sillyButton.addEventListener('click',function(){showResponse(sillyMessage)});
cryingButton.addEventListener('click',function(){showResponse(cryingMessage)});
