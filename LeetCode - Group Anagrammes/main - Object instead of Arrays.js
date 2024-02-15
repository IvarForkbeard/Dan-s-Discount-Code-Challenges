/* 
 
Given an array of strings strs, group the anagrams together. You can return the answer in any order. 
 
An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once. 
 
  
 
Example 1: 
 
Input: strs = ["eat","tea","tan","ate","nat","bat"] 
Output: [["bat"],["nat","tan"],["ate","eat","tea"]] 
Example 2: 
 
Input: strs = [""] 
Output: [[""]] 
Example 3: 
 
Input: strs = ["a"] 
Output: [["a"]] 
  
 
Constraints: 
 
1 <= strs.length <= 104 
0 <= strs[i].length <= 100 
strs[i] consists of lowercase English letters. 
 
*/

const fs = require("fs");
const strs = fs.readFileSync("data.txt", "utf-8").split(",");

function sortLetters(word) {
    const sortedWord = word.split("").sort().join().replace(/,/g, "");

    return sortedWord;
}

function findAnagrammes(array) {
    let arrayLength = array.length;
    const anagrammeMap = {};

    for (let i = 0; i < arrayLength; i++) {
        let word = array[i].trim();
        let sortedWord = sortLetters(word);

        if (anagrammeMap[sortedWord]) {
            anagrammeMap[sortedWord].push(word);
        } else {
            anagrammeMap[sortedWord] = [word];
        }
    }
    return Object.values(anagrammeMap);
}

console.log(findAnagrammes(strs));
