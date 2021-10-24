const audio1 = new Audio('assets/james_bond_theme.mp3')
audio1.loop=true;
// audio1.play();
const circle1 = document.querySelector('.circle-one')
const circle2 = document.querySelector('.circle-two')
circle2.style.visibility = 'hidden'
circle1.style.visibility = 'hidden'
setTimeout(() => {
  circle2.style.visibility = 'visible'
}, 1650)
setTimeout(() => {
  circle1.style.visibility = 'visible'
}, 3150)

// setTimeout(() => {
//     audio1.pause();
//     window.location.href="main.html"
// }, 5000);
