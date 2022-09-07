var btnTranslate = document.querySelector("#btn-translate");
var textInput = document.querySelector("#text-input");
console.log(textInput);
var outputDiv = document.querySelector("#output")

var serverURL = "https://api.funtranslations.com/translate/valyrian.json"

function getTranslationURL(text) {
    return serverURL + "?" + "text=" + text
}

function clickEventHandler() {
    var inputText = textInput.value

    if(inputText){
        fetch(getTranslationURL(inputText))
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated;
            console.log(translatedText);
            outputDiv.innerText = translatedText;
        })
    }else{
        alert('The input field is empty')
    }

}

btnTranslate.addEventListener("click", clickEventHandler);

