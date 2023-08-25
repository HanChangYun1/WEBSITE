$(function () {
  var isStartMotion = true
  var rafId
  var scrollMotion = function () {
    if (!isStartMotion) return
    isStartMotion = false
    rafId = requestAnimationFrame(function () {
      /* scroll motion------------------------ */
      $('.greet_section > *').each(function () {
        var t = $(this).offset().top
        if (scry >= t - winh * .8) {
          $(this).addClass('active')
        } else {
          $(this).removeClass('active')
        }//if else
      })//each
      
      /* image parallax -------------------------*/
      var t = $('.greet_section figure').offset().top
      var h = $('.greet_section figure').innerHeight()
      var meta = 0 + (scry - (t - winh * 0.5 + h * 0.5)) * 0.07
      if(meta < -13) meta = -13
      if(meta >  13) meta = 13
      $('.greet_section figure img').css({
        'transform':`scale(1.4) translateY(${meta}%)` 
      }) 
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