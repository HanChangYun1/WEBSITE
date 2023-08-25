$(function () {
  $('.rolling').clone().appendTo('.rolling_container')
  // var clone = document.querySelector('.rolling').cloneNode(true)
  // document.querySelector('.rolling_container').append(clone)
  //swiper--------------------------------------------
  const swiper = new Swiper('.home_visual', {
    //autoplay:false,
    autoplay: { delay: 2000,},
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.pagination',
    type: 'bullets',
    clickable: true,
  }, 

  slidesPerView: 1,
  slidesPerGroup : 1,
  // breakpoints: {
  //   500:{
    //     slidesPerView: 2,
    //     slidesPerGroup : 2,
    //   },
    //   1000: {
      //     slidesPerView: 3,
      //     slidesPerGroup : 3,
      //   },
      //   1200: {
        //     slidesPerView: 4,
        //     slidesPerGroup : 4,
        //   },
        // }
        
      });
      
      var isStartMotion = true
      var rafId
      var scrollMotion = function () {
        if (!isStartMotion) return
        isStartMotion = false
        rafId = requestAnimationFrame(function () {
          $(`.feature figure`).each(function () {
            var t = $(this).offset().top
            if (scry >= t - winh * .9) $(this).addClass('active')
            else $(this).removeClass('active')
          })//each
      
      var t =$(`.feature figure div`).offset().top
      var h =$(`.feature figure div`).innerHeight()
      var meta = 0 + (scry - (t - winh * .5 + h *.5)) * .1
      if(meta > 10) meta = 10
      if(meta < -10) meta = -10
      $(`.feature figure div img`).css({'transform':`scale(1.3) translateY(${meta}%)`})


      t = $(".latest .bottom").offset().top;
      if (scry >= t - winh * 0.8) $(".latest .bottom").addClass("active");
      else $(".latest .bottom").removeClass("active");


      isStartMotion = true
    })//requestAnimationFrame 
  }//scrollMotion

  scrollMotion()
  $(window).scroll(function () {
    scrollMotion()
  }).resize(function () {
    scrollMotion()
  })
})//ready