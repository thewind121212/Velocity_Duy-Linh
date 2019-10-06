$('.carousel').carousel({
    interval: 2000
  });

  $(Window).scroll(function() {
    $('div,a,i').toggleClass('scrolled', $(this).scrollTop() > 1);
  });


