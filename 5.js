function countChar(words, character){
    let counter = words.length - 1;
    let wordsCounter = 0;
    while (counter >= 0) {
        if (words.charAt(counter) == character) {
            wordsCounter++;
        }
        counter--;
    }
    if(wordsCounter == 0){
        return "Not found!"
    }else{
        return wordsCounter;
    }
}

console.log(countChar("arkademy","a"));
console.log(countChar("javascript","x"));
console.log(countChar("peace!","!"));
