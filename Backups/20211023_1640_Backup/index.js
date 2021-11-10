var testStarted = false;
var startTime = null;
var endTime = null;
var testSecondsLength = 10;

// function startTimer(){
//     startTime = new Date();
// }

// window.main = function(){
//     window.requestAnimationFrame(main);
//     if(new Date().getTime() > startTime.getTime() + testSecondsLength * 1000){
//         console.log("ten seconds passed");
//     }
// };

// main();

var words = ["lol", "lmao", "nah"];
var wordCycle = [];
var wordIndex = 0;
var htmlListElements = document.querySelectorAll("li");

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

window.main = function(){
    window.requestAnimationFrame(main);
    if(document.getElementById('type-box').value != "" && !testStarted){
        testStarted = true;
        startTime = new Date();
    }

    if(testStarted){
        if(new Date().getTime() > startTime.getTime() + testSecondsLength * 1000){
            console.log("test over");
            testStarted = false;
        }
    }

    if(document.getElementById('type-box').value == wordCycle[wordIndex]){
        htmlListElements[wordIndex].style.color = "green";
        wordIndex++;
        document.getElementById('type-box').value = "";    
    }
    else if(wordIndex == wordCycle.length){
        wordCycle = generateWordCycle()
        setWords(wordCycle);
        wordIndex = 0;
        for(i = 0; i < htmlListElements.length; i++){
            htmlListElements[i].style.color = ("black");
        }
    }
};

wordCycle = generateWordCycle();
setWords(wordCycle);

main();