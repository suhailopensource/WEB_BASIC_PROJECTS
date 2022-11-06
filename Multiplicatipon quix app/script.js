const question = document.getElementById('question')
const score = document.getElementById('score')
const input = document.getElementById('input')
const sumbitButton = document.querySelector('.btn')
const form = document.getElementById('form')
let num1 = Math.ceil(Math.random()*10)
let num2 = Math.ceil(Math.random()*10)


question.innerText = `What is ${num1} Multiply by ${num2} ?`

let scores = JSON.parse(localStorage.getItem('score'));

if(!scores){
   scores = 0;
}

score.innerText = `Score: ${scores}`


const correctAns = num1 * num2;

form.addEventListener("submit", ()=>{
   const userAns = +input.value
   
   if(userAns === correctAns){
      scores ++;
      updateLocalStorage()
   }
   else{
      scores--;
      updateLocalStorage()
   }

})


function updateLocalStorage(){
   localStorage.setItem("score", JSON.stringify(scores))
}