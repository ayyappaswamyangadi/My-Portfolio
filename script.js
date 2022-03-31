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
        modes.style.color = 'white'
        modes.setAttribute('title', "light mode")
    }else{
        modes.innerText = 'dark_mode'
        modes.style.color = 'grey'
        modes.setAttribute('title', "dark mode")
    }
    })

// preloader

var loader = document.querySelector(".main_div");
        window.addEventListener('load', function(){
            loader.style.display = 'none';
        })

        // onclick style to navbar

       let navbar=document.querySelector('#navbarNav').querySelectorAll('a')
console.log(navbar)

       navbar.forEach(element =>{
         element.addEventListener('click', function(){
           navbar.forEach(nav=>nav.classList.remove('coloring'))

           this.classList.add('coloring')

          })

       })

      //  scroll effect on nav

      const li = document.querySelectorAll(".nav-link");
const sec = document.querySelectorAll("section");

function activeMenu(){
    let len = sec.length;
    while(--len && window.scrollY + 450 < sec[len].offsetTop){}
    li.forEach(ltx => ltx.classList.remove('coloring'));
    li[len].classList.add('coloring');
}
window.addEventListener('scroll', activeMenu);

function checkRefresh()
{
    window.location.hash = ('#home');
    window.scroll(0,0);
}