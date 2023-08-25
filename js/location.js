$(function () {
  var isStartMotion = true
  var rafId
  var scrollMotion = function () {
    if (!isStartMotion) return
    isStartMotion = false
    rafId = requestAnimationFrame(function () {
      $('.location_section > *').each(function () {
        var t = $(this).offset().top
        if (scry >= t - winh * .8) {
          $(this).addClass('active')
        } else {
          $(this).removeClass('active')
        }
      })//each
      isStartMotion = true
    })//requestAnimationFrame
  }//scrollMotion
  scrollMotion()
  $(window).scroll(function () {
    scrollMotion()
  }).resize(function () {
    scrollMotion()
  })
})