(function(window){
  var helloSpeaker = new Object();
  var speakWord = "Hello";
  helloSpeaker.speak=function(name) {
    if(name===undefined){
      return;
    } else{    
        console.log(speakWord + " " + name);
    }
}

window.helloSpeaker =helloSpeaker;

})(window);
