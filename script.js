/*header and navbar section*/

let menuBar = document.querySelector('#menu-bar');
let navBar = document .querySelector('.my-nav');
let header = document.querySelector('.header-1');

menuBar.addEventListener('click', () => {
    menuBar.classList.toggle('fa-times');
    navBar.classList.toggle('active');
});

window.onscroll = () => {
    menuBar.classList.remove('fa-times');
    navBar.classList.remove('active');

    if(window.scrollY > 150){
        header.classList.add('active')
    } else {
        header.classList.remove('active')
    }

    if(window.scrollY > 60){
      document.querySelector('#scroll-top').classList.add('active');
    }else{
      document.querySelector('#scroll-top').classList.remove('active');
    }
    
}

/*Typed Cursor*/

var p = document.getElementById('text');
p.innerHTML = '';
var n = 0;
var str = 'Front-End Developer';
var typeTimer = setInterval(function() {
  n = n + 1;
  p.innerHTML =  str.slice(0, n);
  if (n === str.length) {
    clearInterval(typeTimer);
    p.innerHTML = str;
    n = 0;
    setInterval(function() {

      if (n === 0) {
        p.innerHTML =  str + "|"
        n = 1;
      } else {
        p.innerHTML =  str
        n = 0;
      };
    }, 1000);
  };
}, 400)


var swiper = new Swiper(" .skill-slider", {
  spaceBetween: 10,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
        dynamicBullets: true,
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop:true,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    600: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,
    },
  }

});



var form = document.getElementById("my-form");
    
    async function handleSubmit(event) {
      event.preventDefault();
      var status = document.getElementById("status");
      var data = new FormData(event.target);
      fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
      }).then(response => {
        if (response.ok) {
          alert(status.innerHTML = "Thanks for your submission!");
          form.reset()
        } else {
          response.json().then(data => {
            if (Object.hasOwn(data, 'errors')) {
              status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
            } else {
              alert(status.innerHTML = "Oops! There was a problem submitting your form");
            }
          })
        }
      }).catch(error => {
        alert(status.innerHTML = "Oops! There was a problem submitting your form");
      });
    }
    form.addEventListener("submit", handleSubmit)
