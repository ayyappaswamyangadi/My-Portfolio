var nav = document.querySelector('nav');
var halfPart = document.querySelector('.halfPart');

window.addEventListener('scroll', function(){
  if(window.pageYOffset > 20){
    nav.classList.add('sticky');
    halfPart.style.color = "yellow"
  }else{
    nav.classList.remove('sticky');
    halfPart.style.color = "purple"
  }
})

// go to top
function checkRefresh()
{
    window.location.hash = ('#home');
    window.scroll(0,0);
}

var goToTopbutton = document.getElementById("top");

window.onscroll = function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    goToTopbutton.style.display = "block";
  } else {
    goToTopbutton.style.display = "none";
  }
}

function goToTop(){
    window.scroll(0,0);
    btnHome.classList.add('coloring');
    btnaboutMe.classList.remove('coloring');
    btnmySkills.classList.remove('coloring');
    btncontactMe.classList.remove('coloring');
}



