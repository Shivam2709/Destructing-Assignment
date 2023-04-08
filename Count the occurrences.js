/**
Q. You are building a word count generator that will take a large string of text as input and output the words and
the number of times they are present in the string. Your task is to write a function that can count the
occurrences of each word in the string and return a Map containing each word's count. For simplicity, you can
assume that the string only contains alphabetic characters and spaces.
 */

function countWords(str) {
    const wordCounts = new Map();
    const words = str.split(' ');

    for(let word of words){
        if(wordCounts.has(word)){
            wordCounts.set(word, wordCounts.get(word) + 1);
        }else{
            wordCounts.set(word, 1);
        }
    }
    return wordCounts;
}

let str = "sdru sjhjf kjkfhk kjdkwfjo skajslf sasfdef skhkfhse aszxsl dkjfllc zcdfljgfl sdlfjglfjglc dfngkjdlf. difogj dfhogjwe hkdnfs dksdsdru sjhjf kjkfhk kjdkwfjo jhjf kjkfhk kjdkwfjo skajslf sasfdef skhkfhse aszxsl dkjfllc zcdfljgfl sdlfjglfjglc dfngkjdlf. difogj dfhogjwe hkdnfs kjkfhk kjdkwfjo skajslf sasfdef skhkfhse aszxsl dkjfllc zcdfljgfl sdlfjglfjglc dfngkjdlf. difogj dfhogjwe hkdnfs dksd";
console.log(countWords(str));