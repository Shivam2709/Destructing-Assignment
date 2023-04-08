/**
You are building a program that takes an array of numbers as input and you need to remove all the duplicates
from the array. You want to write a function that can accomplish this task efficiently and returns a new set that
contains only the unique elements.
 
 */


function removeDuplicate ( nums) {
    const uniqeNums = [];
    for(const i of nums) {
        if(!uniqeNums.includes(i)) {
            uniqeNums.push(i);
        }
    }
    return uniqeNums;
}

const nums = [1, 2, 3, 3, 4, 5, 4, 7, 5, 2 ];
console.log(removeDuplicate(nums));