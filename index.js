var testStarted = false;
var startTime = null;
var testSecondsLength = 60;

var words = ["lol", "lmao", "nah", "why", "would", "you", "do", "this"];
var wordCycle = [];
var wordIndex = 0;
var htmlListElements = document.querySelectorAll("li");
var correctWords = 0;
var wordsTyped;

function generateWordCycle(){
    var newCycle = [];

    for(i = 0; i < 10; i++){
        newCycle.push(words[Math.floor(Math.random()*words.length)]);
    }
    return newCycle;
}

function setWords(wordCycle){
    for(i = 0; i < htmlListElements.length; i++){
        htmlListElements[i].innerText = wordCycle[i]
    }
}

function resetCycle(){
    wordCycle = generateWordCycle()
    setWords(wordCycle);
    wordIndex = 0;
    for(i = 0; i < htmlListElements.length; i++){
        htmlListElements[i].style.color = ("black");
    }
}

function manageWords(){
    if(document.getElementById('type-box').value == wordCycle[wordIndex] + " "){
        htmlListElements[wordIndex].style.color = "green";
        htmlListElements[wordIndex].style.background = "white";
        wordsTyped += wordCycle[wordIndex];
        wordIndex++;
        document.getElementById('type-box').value = "";    
        correctWords++
        htmlListElements[wordIndex].style.background = "#d3d3d3";
        console.log(wordsTyped)
    }
    else if(wordIndex == wordCycle.length){
        resetCycle();
        htmlListElements[wordIndex].style.background = "white";
        htmlListElements[wordIndex].style.background = "#d3d3d3";
    }
}

function wordTimer(){
    if(document.getElementById('type-box').value != "" && !testStarted){
        testStarted = true;
        startTime = new Date();
        correctWords = 0;
        wordsTyped = ""
    }

    if(testStarted){
        if(new Date().getTime() > startTime.getTime() + testSecondsLength * 1000){
            document.getElementById('wpm').innerText = "test over, words typed: " + correctWords + " in " + testSecondsLength + " seconds";
            htmlListElements[wordIndex].style.background = "white";
            resetCycle();
            htmlListElements[wordIndex].style.background = "#d3d3d3";


            testStarted = false;
            document.getElementById('type-box').value = "";    
            document.activeElement.blur();
        }
    }
}

window.main = function(){
    window.requestAnimationFrame(main);
    wordTimer();
    manageWords();


    // console.log(htmlListElements[wordIndex].innerText[document.getElementById('type-box').value.length]);
    // console.log(htmlListElements[wordIndex].innerText.substr(0, document.getElementById('type-box').value.length));
    // console.log(document.getElementById('type-box').value);
    if(document.getElementById('type-box').value != htmlListElements[wordIndex].innerText.substr(0, document.getElementById('type-box').value.length)){
        htmlListElements[wordIndex].style.background = "red";
    }
    else{
        htmlListElements[wordIndex].style.background = "#d3d3d3";
    }
    // console.log(document.getElementById('type-box').value);
    // if(document.getElementById('type-box').value[0] != htmlListElements[wordIndex].innerText[document.getElementById('type-box').value.length] && document.getElementById('type-box').value != ""){
    //     console.log("word");
    // }
};

wordCycle = generateWordCycle();
setWords(wordCycle);

htmlListElements[wordIndex].style.background = "#d3d3d3";

main();