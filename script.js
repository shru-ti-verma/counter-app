              // method =2 
var count = document.querySelector(".count");
var buttons = document.querySelector(".buttons");



buttons.addEventListener("click",(g)=>{
  if (g.target.classList.contains("add")) {
    count.innerHTML ++;
    setcolor(); }
   else if (g.target.classList.contains("subtract")) {
    count.innerHTML--;
    setcolor(); }
  if (g.target.classList.contains("reset")) {
    count.innerHTML=0;
    setcolor();}
  });



function setcolor() {
  
if (count.innerHTML>0) {
  count.style.color="green";
}


 else if (count.innerHTML<0) {
  count.style.color="orangered";
}
else{count.style.color="white"}

}







//                    method=1

// const sub = document.querySelector(".subtract");
// const add = document.querySelector(".add");
// const resetCount = document.querySelector(".reset");
// var count = document.querySelector(".count");


// add.addEventListener("click",()=>{

// count.innerHTML++;
// });

// sub.addEventListener("click",()=>{

//   count.innerHTML--;
//   });

//  resetCount.addEventListener("click", () => {
//   count.innerHTML = 0;
// });

