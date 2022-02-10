console.log('hi')

const colors = ['#1abc9c','#3498db','#e67e22','#e74c3c']
const title = document.querySelector('h2')


const superFuctions = {
    enter: function enter(){
        title.style.color = colors[0]
        title.innerHTML = 'Enter'
    },
    leaves : function leaves(){
        title.style.color = colors[1]
        title.innerHTML = 'Leaves'
    },
    resize :  function resize(){
        title.style.color = colors[2]
        title.innerText = 'Resize'
    },
    contextmenu: function contextmenu(){
        title.style.color = colors[3]
        title.innerText = 'Contextmenu'
    }
}

title.addEventListener('mousemove',superFuctions.enter)
title.addEventListener('mouseleave',superFuctions.leaves)
window.addEventListener('resize',superFuctions.resize)
window.addEventListener('contextmenu',superFuctions.contextmenu)