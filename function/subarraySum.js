/* Q1: Subarray Sum
Write a function hasZeroSumSubarray(arr) that returns true if there exists any subarray of the array whose sum is 0. 
hasZeroSumSubarray([1, 2, -3, 4]); // true,
//  because 1 + 2 + -3 = 0
hasZeroSumSubarray([1, 2, 3]);     // false

*/

function hasZeroSumSubarray(arr) {
    let i = 0;
    let result = false
    while (i < arr.length) {
        let j = i;
        let sumNum = 0;
        while (j < arr.length) {
            sumNum += arr[j];
            if (sumNum == 0 || arr[j] == 0) {
                result = true;
                break;
            }
            j += 1;
        }
        i += 1;
    }
    return result
}
let arr=[2,0,4]
console.log(hasZeroSumSubarray(arr));