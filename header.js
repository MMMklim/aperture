let burger = document.querySelector(".burger");
let nav = document.querySelector("nav");
let body = document.querySelector("body");
let active_nav = document.querySelector(".nav-active");

burger.addEventListener("click", function () {
  nav.classList.toggle("active");
  body.classList.toggle("lock");

  active_nav.classList.remove("nav-active");
  active_nav.classList.add("a-nav");
});

$(document).ready(function () {
  $(".client-icon").slick({
    arrows: false,
    autoplay: true,
    autoplaySpeed: 1000,
    slidesToShow: 5,
    infinite: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          dots: true
        }
      },
      
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: false
        }
      },
      
      {
        breakpoint: 426,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: false
        }
      },

      {
        breakpoint: 376,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false
        }
      }
    ]
  });
});
