var words = ["lol", "lmao", "nah"];
var wordCycle = [];
var wordIndex = 0;

function generateWordCycle(){
    var newCycle = [];

    for(i = 0; i < 10; i++){
        newCycle.push(words[Math.floor(Math.random()*words.length)]);
    }
    return newCycle;
}

function setWords(wordCycle){
    var htmlListElements = document.querySelectorAll("li");
    for(i = 0; i < htmlListElements.length; i++){
        htmlListElements[i].innerText = wordCycle[i]
    }
}

window.main = function () {
    window.requestAnimationFrame( main );
    if(document.getElementById('type-box').value == wordCycle[wordIndex]){
        wordIndex++;
        console.log("correct bruh");
        document.getElementById('type-box').value = "";    
    }
    else if(wordIndex == wordCycle.length){
        wordCycle = generateWordCycle()
        document.getElementById("word-list").innerText = wordCycle;
        setWords(wordCycle);
        wordIndex = 0;

    }
};



wordCycle = generateWordCycle();
console.log(wordCycle);
wordCycle[0].fontcolor("green");
document.getElementById("word-list").innerText = wordCycle;
console.log(document.getElementById("word-list").innerText.split(",")[0]);

setWords(wordCycle);

// const myNodeList = document.querySelectorAll("li");
// myNodeList[0].style.color = "green";
// document.getElementById("word-list").innerText.split(",")[0].fontsize("100px")
main();