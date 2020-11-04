/*
* `mouseover`
  * `keydown`
  * `wheel`
  * `load`
  * `focus`
  * `resize`
  * `scroll`
  * `select`
  * `dblclick`
  * `drag / drop`
*/

// Header

let headerBus = document.querySelector('h1');
headerBus.addEventListener('dblclick' , event => event.target.style.color = 'red');
headerBus.addEventListener('dblclick' , event => event.target.style.transform = 'rotate(180deg');  
// Nav

let nav = document.querySelectorAll('.nav-link')

nav.forEach( link => {
    link.addEventListener( 'mouseover' , (event) => event.target.style.color = 'green');
    link.addEventListener( 'mouseenter' , event => event.target.style.textDecoration = 'none');
    link.addEventListener( 'mouseout' , event => event.target.style.fontSize = '2em');
})

let intro = document.querySelector('.intro');
intro.addEventListener('click' , event => event.target.style.backgroundColor = 'red');

// Header IMG

let mainImg = document.querySelector('.intro img');
mainImg.addEventListener('click' , event => event.target.style.width = '70%').stopPropagation();



let h2 = document.querySelectorAll('h2');
h2.forEach( title => {

    window.addEventListener('keydown' , event => title.style.backgroundColor= 'cyan');

    window.addEventListener('wheel' , event => title.style.fontSize = '36px');

    window.addEventListener('keyup' , event => title.style.backgroundColor= 'yellow');


})

window.addEventListener('load' , event => alert('Magic School Bus!'));

let paragraphs = document.querySelectorAll('p');
paragraphs.forEach( item => {
  window.addEventListener( 'resize' , event => item.style.fontWeight = 900);
})