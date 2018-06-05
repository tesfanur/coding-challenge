/**
 * Author: Tesfaye Belachew, Email: get.tesfaye.belachew@gmail.com
 * 
 * Given an array of integers, find if the array contains any duplicates. 
 * Your function should return true if any value appears at least twice in the array, 
 * and it should return false if every element is distinct. *
 */
//repo: https://github.com/tesfanur/coding-challenge.git
 
let duplicationExists = (arrayInput) => {
    //loop through each array element and compare each element 
    //with the remaining array elements
    //and exit the loop by returning true if identical element exists
    for (let i = 0; i < arrayInput.length; i++) {
        for (let j = i + 1; j < arrayInput.length; j++) {
            if (arrayInput[i] === arrayInput[j]) {
                return console.log(true);
            }
        }
    }
    //otherwise, if no identical element found, return false
    return console.log(false);
}
/**
 * Test duplcateExists function
 */
//returns flase
duplicationExists([1, 2, 3, 4, 5]);
//returns true
duplicationExists([1, 2, 5, 3, 4, 5]);
//returns true
duplicationExists([10, 2, 5, 3, 4, , 10, 5, 10]);
//TODO write unit test for this function