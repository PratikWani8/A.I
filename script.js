const btn = document.querySelector('.talk')
const content = document.querySelector('.content')


function speak(text){
    const text_speak = new SpeechSynthesisUtterance(text);

    text_speak.rate = 1;
    text_speak.volume = 1;
    text_speak.pitch = 1;

    window.speechSynthesis.speak(text_speak);
}


const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition =  new SpeechRecognition();

recognition.onresult = (event)=>{
    const currentIndex = event.resultIndex;
    const transcript = event.results[currentIndex][0].transcript;
    content.textContent = transcript;
    takeCommand(transcript.toLowerCase());

}

btn.addEventListener('click', ()=>{
    content.textContent = "Listening...."
    recognition.start();
})

function takeCommand(message){
 
   // Greetings 
   
    if(message.includes('hey') || message.includes('hello')){
        speak("Hello Sir, How can I Help You?");
    }
    else if(message.includes('good morning')){
        speak("good morning sir ");
        }
    else if(message.includes('good afternoon')){
        speak("good afternoon sir ");
        } 
    else if(message.includes('good evening')){
        speak("good evening sir ");
        } 
     
     // Openings Websites 
       
    else if(message.includes("open google")){
        window.open("https://google.com", "_blank");
        speak("Opening Google")
    }
    else if(message.includes("open youtube")){
        window.open("https://youtube.com", "_blank");
        speak("Opening Youtube")
    }
    else if(message.includes("open instagram")){
        window.open("https://instagram.com", "_blank");
        speak("Opening Instagram")
        }
    else if(message.includes("open facebook")){
        window.open("https://facebook.com", "_blank");
        speak("Opening Facebook")
    }
    else if(message.includes("open tweeter")){
        window.open("https://twitter.com", "_blank");
        speak("Opening Tweeter")
    }
    else if(message.includes("open amazon")){
        window.open("https://amazon.com", "_blank");
        speak("Opening Amazon")
    }
 
     // Opening Apps 
     
     else if(message.includes('camera')) {
        window.open("camera://")
        const finalText = "Opening Camera";
        speak(finalText);
    }
    else if(message.includes('calculator')) {
        window.open("calculator://")
        const finalText = "Opening Calculator";
        speak(finalText);
    }
    else if(message.includes('contacts')) {
        window.open("contacts://")
        const finalText = "Opening Contacts";
        speak(finalText);
    }
    else if(message.includes('watsapp')) {
        window.open("watsapp://")
        const finalText = "Opening Watsapp";
        speak(finalText);
    }
    
    // Date and Time 
      
    else if(message.includes('time')) {
        const time = new Date().toLocaleString(undefined, {hour: "numeric", minute: "numeric"})
        const finalText = time;
        speak(finalText);
    }

    else if(message.includes('date')) {
        const date = new Date().toLocaleString(undefined, {month: "short", day: "numeric"})
        const finalText = date;
        speak(finalText);
    }

     // Searching other informations
     
     else if(message.includes('what is') || message.includes('who is') || message.includes('what are')) {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "This is what i found on internet regarding " + message.replace("what is","") || message.replace("who is","") || message.replace("what are","");
	    speak(finalText);
  
    }

    else if(message.includes('wikipedia')) {
        window.open(`https://en.wikipedia.org/wiki/${message.replace("wikipedia", "")}`, "_blank");
        const finalText = "This is what i found on wikipedia regarding " + message;
        speak(finalText);
    }
     
    else {
        const finalText = "Sorry, I have no Information";
        speak(finalText);
    }
}
