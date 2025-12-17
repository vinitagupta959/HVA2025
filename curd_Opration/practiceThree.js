/* Q: Read n integers, then insert a new element x at the end of the array and print it.

Input:
5  
10 20 30 40 50  
99

Output:
10 20 30 40 50 99 */
n=5
arr=[10,20,30,40,50]
arr[arr.length]=99
console.log(arr)
console.log(arr.length)

arr[arr.length]=100;
console.log(arr)
console.log(arr.length)


arr[arr.length]=101;
console.log(arr)
console.log(arr.length)
