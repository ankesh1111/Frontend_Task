document.getElementById('box1').addEventListener('click', toggleBox);
// document.getElementById('box2').addEventListener('click', toggleBox);
document.getElementById('box3').addEventListener('click', toggleBox);

let button=document.getElementById('CART')
button.addEventListener('click', ()=>{
     alert('Item added to the cart')
 });




 let box=document.getElementById('box1');
 box.addEventListener("click",()=>{
  alert('Click box1')
 })


 

let box3=document.getElementById('box3');
 box3.addEventListener("click",()=>{
  alert('Click box3')
 })

function toggleBox() {
   alert('This is a Box')
}

 