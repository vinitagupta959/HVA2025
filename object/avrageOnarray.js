/* How do you find the average of numbers in an array?

Example: [10, 20, 30] → 20 */

let arr=[10, 20, 30];
let total=0 ;
for (let i=0; i<arr.length; i++){
    total+=arr[i];

}
console.log(total/arr.length)