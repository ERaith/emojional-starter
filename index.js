//Define Variables needed for happyButton Functionality
const happyButton = document.querySelector(".happy");
const sillyButton = document.querySelector(".silly");
const cryingButton = document.querySelector(".crying");
const messageElement = document.querySelector('.message');
const happyMessage = ['You go!','Your smile just cheered me up!','YAY!'];
const sillyMessage = ['Interesting response','Sounds... good?','Me too.'];
const cryingMessage = ['Do you want to talk?','Keep your head up','We can cry together','What can I do?'];

function createResponse(messageArray) {
  var previousMessage = messageElement.innerHTML;
  var message = messageArray[randomIndex(messageArray.length)];
  while (previousMessage == message) {
    message = messageArray[randomIndex(messageArray.length)];
  }
  showResponse(message);
}

function randomIndex(arrayLength) {
  return Math.floor(Math.random() * arrayLength);
}

function showResponse(message) {
  //Show Response
  messageElement.innerHTML = message;
}


happyButton.addEventListener('click',function(){createResponse(happyMessage)});
sillyButton.addEventListener('click',function(){createResponse(sillyMessage)});
cryingButton.addEventListener('click',function(){createResponse(cryingMessage)});
