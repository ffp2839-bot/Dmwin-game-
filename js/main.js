// COUNTER
document.querySelectorAll('.counter').forEach(counter => {
  let target = +counter.dataset.target;
  let count = 0;
  let inc = target / 200;

  let update = () => {
    count += inc;
    if(count < target){
      counter.innerText = Math.floor(count);
      requestAnimationFrame(update);
    } else {
      counter.innerText = target.toLocaleString();
    }
  };
  update();
});

// COOKIE
function openCookie(){
  document.getElementById("cookieBox").style.display="block";
}
function closeCookie(){
  document.getElementById("cookieBox").style.display="none";
}
