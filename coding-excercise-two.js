/**
 * Author: Tesfaye Belachew, Email: get.tesfaye.belachew@gmail.com
 * 
 * Optional Question - Find the consecutive subarray within 
 * an array (containing at least one number) which has the largest product. 
 * For example, given the array [2, 3, -2, 4],the contiguous subarray [2 ,3] 
 * has the largest product = 6.
 */
//Solution function for the question above
//repo: https://github.com/tesfanur/coding-challenge.git
let consecMaxProduct = (arrayInput) => {
    //declare a variable to hold product of consecutive elements of the arrayInput 
    let maxProduct, a,b;
    //check array length and return a proper 
    //message for a user
    if (arrayInput.length == 0)
        return console.log("the array is empty");
    if (arrayInput.length == 1)
        return console.log("the array has only one element");

    //loop through the array elements
    for (let i = 0; i < arrayInput.length; i++) {
        //initialize maxProduct variable with the first consecutive array elements product
        if (i <= 1){
            maxProduct = arrayInput[0] * arrayInput[1];
            a=arrayInput[0];
            b=arrayInput[1];
        }
        //then compare the initial product with the remaining consecutive array elements product
        //and assign the max value to maxProduct variable
        if (maxProduct < arrayInput[i] * arrayInput[i + 1] && i + 1 < arrayInput.length){
            maxProduct = arrayInput[i] * arrayInput[i + 1];
            a=arrayInput[i];
            b=arrayInput[i+1];
        }

    }
    //return maxProduct;
    return console.log(maxProduct,"subarray for this maximum product:",[a, b]);
}
/**
 * Test consecMaxProduct function
 */
//returns 200
consecMaxProduct([100, 2, 3, 4, 5]);
//returns 150
consecMaxProduct([1, 2, 50, 3, 4, 5]);
//returns 160
consecMaxProduct([10, 2, 5, 30, 4, 16, 10, -50, 10]);
//returns 6
consecMaxProduct([2, 3, -2, 4]);
//returns "the array is empty"
consecMaxProduct([]);
//returns "the array has only one element"
consecMaxProduct([2]);
//returns 30
consecMaxProduct([2, 15]);