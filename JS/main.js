var box = document.querySelector('.box');
var slowBtn = document.querySelector('.slowBtn');
var fastBtn = document.querySelector('.fastBtn');


slowBtn.addEventListener('click', animateSlow);

function animateSlow() {
  
  box.style.left = '91.5%';//bura yaziriqki x oxu uzre box bu qeder getsin
  box.style.transition ='all 4s'//gedisin sureti bu qeder olsun

  setTimeout(function() {//nece vaxtdan sora (3000) hansi yere qayitdigini gorsetsin
    box.style.left= '0%';
  }, 3000);
}


fastBtn.addEventListener('click',animateFast);

function animateFast() {
  
  box.style.left = '88%';
  box.style.transition='all 1s'

  setTimeout(function() {
    box.style.left= '0%';
  }, 888);
}