// /* How do you remove all negative numbers from an array using a while loop? */

// let arr = [-1, 2, -3, -4, 5];
// let i = 0;
// let n = arr.length;

// while (i < n) {
//   if (arr[i] < 0) {
//     for (let j = i; j < n - 1; j++) {
//       arr[j] = arr[j + 1];
//     }
//     n--; 
//   } else {
//     i++;
//   }
// }
// console.log(arr);

// let k = 0;
// while (k < n) {
//   console.log(arr[k]);
//   k++;
// }


let arr = [-1, 2, -3, -4, 5];
let i = 0;
let k = 0;  

while (i < arr.length) {
  if (arr[i] >= 0) {
    arr[k] = arr[i]; 
    k++;
  }
  i++;
}

i = k;
while (i < arr.length) {
  arr[i] = undefined;  // Or 0, or leave it if not needed
  i++;
}
console.log(arr);
//abhi arr me undifned bhi hai to hum uski length ko km karenge to vha tk ki length lega
arr.length = k;

console.log(arr);  // Output: [2, 5]


let b=[-1, 2, -3, -4, 5];
b.length=2;
console.log(b);

