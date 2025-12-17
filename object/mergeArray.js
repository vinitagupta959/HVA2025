
// Question 2: Merge two arrays of objects based on id

const arr1 = [
  { id: 1, name: "John" },
  { id: 2, name: "Jane" }
];

const arr2 = [
  { id: 1, score: 85 },
  { id: 2, score: 90 }
];

for(let i=0; i<arr1.length; i++){
    if (arr1[i].id == arr2[i].id){
        arr1[i].score=arr2[i].score
    }
}
console.log(arr1);
