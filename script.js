const swiperMilk = new Swiper('.swiper-milk', {
    direction: 'vertical',
    speed:600,
    loop: true,
  autoplay: {
    delay:2000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
  slidesPerView:2,
  spaceBetween:10,
  });

  const swiperCurd = new Swiper('.swiper-curd', {
    direction: 'vertical',
    speed:600,
    loop: true,
  autoplay: {
    delay:3000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
    reverseDirection: true,
  },
  slidesPerView:3,
  spaceBetween:10,
  });

  const swiperGhee = new Swiper('.swiper-ghee', {
    direction: 'vertical',
    speed:600,
    loop: true,
  autoplay: {
    delay:2500,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
  slidesPerView:2,
  spaceBetween:10,
  });

  function toggleBanner(){
    const banner=document.querySelector('.banner');
    const header=document.querySelector('header');
    const bannerMiddle = document.querySelector('.banner-middle');
    const bannerRight=document.querySelector('.banner-right');
    banner.classList.toggle('active');
    header.classList.toggle('active');
    bannerMiddle.classList.toggle('active');
    bannerRight.classList.toggle('active');
  }
  function toggleMenu(){
    const navMobile=document.querySelector('.nav-mobile');
    const menu=document.querySelector('.menu');
    navMobile.classList.toggle('active');
    menu.classList.toggle('active');
  }