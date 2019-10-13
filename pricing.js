$(Window).scroll(function() {
    $('div,a,i').toggleClass('scrolled', $(this).scrollTop() > 1);
  });
