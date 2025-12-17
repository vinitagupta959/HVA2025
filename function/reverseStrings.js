/* Q2: Reverse Only Strings in an Array
Given an array with mixed types (numbers and strings), write a function reverseStrings(arr) that reverses only the string elements, keeping numbers as they are.
reverseStrings([1, "hello", 2, "world"]);
// Output: [1, "olleh", 2, "dlrow"]
 */

function reverseStrings(arr){
    let i=0
    while (i<arr.length){
        if (typeof arr[i]=="string"){
            let j=arr[i].length-1;
            let newStr="";
            while (j>=0){
                newStr+=arr[i][j];
            j--;
            }
            arr[i]=newStr;
        }
        i++;
    }
    return arr;
}
console.log(reverseStrings([1, "hello", 2, "world"]));
