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

// mode

var mode = document.getElementById("mode");

    var modes = document.querySelector('.material-icons')

    mode.addEventListener('click', function(){
        document.body.classList.toggle("dark-theme")
        if(document.body.classList.contains('dark-theme')){
        modes.innerHTML = 'light_mode'
        modes.setAttribute('title', "light mode")
    }else{
        modes.innerText = 'dark_mode'
        modes.setAttribute('title', "dark mode")
    }
    })

// preloader

var loader = document.querySelector(".main_div");
        window.addEventListener('load', function(){
            loader.style.display = 'none';
        })