let sidenav = document.getElementById("sidenav");
let menuicon = document.getElementById("menuicon");
let colsenav = document.getElementById("close-nav");

menuicon.addEventListener("click",function() {
  sidenav.style.right=0;
})
colsenav.addEventListener("click",function() {
  sidenav.style.right ="-50%";
})