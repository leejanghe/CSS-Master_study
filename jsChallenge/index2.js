const htmlColor = document.querySelector('html');

const colors = ['#1abc9c','#3498db','#e67e22','#e74c3c']
// htmlColor.style.backgroundColor = colors[0];


console.log(window.innerWidth);

window.addEventListener('resize',()=>{
    console.log(window.innerWidth);
    if(window.innerWidth < 500){
        htmlColor.style.backgroundColor = colors[0];
    } else if(window.innerWidth < 800){
        htmlColor.style.backgroundColor = colors[1];
    } else if(window.innerWidth < 1000){
        htmlColor.style.backgroundColor = colors[2];
    } else(
        htmlColor.style.backgroundColor = colors[3]
    )
})