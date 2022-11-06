const button = document.querySelector('.btn');

button.addEventListener("mouseover", (event)=>{
    const x = event.clientX - button.offsetLeft;
    const y = event.clientY - button.offsetTop;

    button.style.setProperty("--xpos", x+"px");
    button.style.setProperty("--ypos", y+"px");
})