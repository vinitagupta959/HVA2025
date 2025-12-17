/*  Insert an element at a specific index
Q: Insert a number x at position pos by shifting elements.

Input:
5  
10 20 30 40 50  
3  
99
Output:
10 20 30 99 40 50 */

arr=[10, 20, 30, 40, 50 ];
let index=3;
let target=99
for (let i=arr.length; i>index;i--){
    arr[i]=arr[i-1]
}
arr[index]=target;
console.log(arr)