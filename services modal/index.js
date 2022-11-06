let view = document.querySelector('.services__modal');
let btn = document.querySelector('.btn1');
let closes = document.querySelector('.services__modal_close');



 btn.addEventListener("click", ()=>{
   view.classList.add('active_modal');
 })
 closes.addEventListener("click", ()=>{
   view.classList.remove('active_modal');
 })


