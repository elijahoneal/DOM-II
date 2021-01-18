// Your code goes here
const logo = document.querySelector('h1')


logo.addEventListener('click', (e) => {
e.target.style.color = 'green';
})

const header = document.querySelector('header')
logo.addEventListener('dblclick', (e) => {
    e.target.style.transform = 'rotate(-45deg)';
    })

const nav = document.querySelectorAll('a');


const navLink = Array.from(nav)
navLink.forEach( link => {
    link.addEventListener('mouseenter', (e) => {
        e.target.style.transform = 'scale(1.5)';
    })
    link.addEventListener('mouseleave', (e) => {
        e.target.style.transform = 'scale(1)';
    })
    link.addEventListener('mouseover', (e) => {
        e.target.style.color = 'coral';
    })
})



window.addEventListener( 'keydown', (e) => {
    e.target.style.color = 'lightGreen'
    console.log(e.target)
})
window.addEventListener( 'keyup', (e) => {
    e.target.style.color = 'black'
    console.log(e.target)
})


