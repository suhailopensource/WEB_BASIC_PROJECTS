const text = document.getElementById('text_area');
let total = document.getElementById('total_counter');
let remaining = document.getElementById('remaining_counter');


text.addEventListener("keydown", () => {
  updatecounter();  
})
updatecounter(); 
function updatecounter(){
    total.innerText = text.value.length;
    // remaining.innerText = 50 - total.innerText;
     remaining.innerText = text.getAttribute("maxlength") - text.value.length;
}