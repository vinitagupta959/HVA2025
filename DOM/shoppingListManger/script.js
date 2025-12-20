let itemInput=document.getElementById("itemInput");
let addBtn=document.getElementById("addBtn");
let errorMsg=document.getElementById("errorMsg");
let itemCount=document.getElementById("itemCount");
let itemList=document.getElementById("itemList");
let itemListarr=[]
let i=0
addBtn.addEventListener('click',function(){
  if (itemInput.value ===""){
    errorMsg.innerText="Please enter an item."
    return;
  }else{
    errorMsg.innerText="";
  }
let item={
  itemName:itemInput.value,

}
i+=1
itemCount.innerText=`Total Item: ${i}`
itemListarr.push(item);
displayItemList();
})

function displayItemList(){
  itemListarr.forEach(function(item){
 itemList.innerHTML+=`<p>Item Name:- ${item.itemName}</p>
 <button class="deleteBtn">Delete</button>`
  });
 
}
let deleteBtns=document.querySelectorAll(".deleteBtn");
for (let j=0; j<deleteBtns.length; j++){
  deleteBtns[j].addEventListener('click',function(){
    itemListarr.splice(deleteBtns[j],1)
     displayItemList();
     i--;
  });
 
}