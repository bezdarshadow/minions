(() => {
  $('.about-us-btn').click(function () {
    const validateText = $('.is-shown');
    if (validateText.text() === 'Read more') {
      $('[data-more-text-about]').show('slow');
    } else {
      $('[data-more-text-about]').hide('slow');
    }
    $('.btn-text').each(function () {
      $(this).toggleClass('is-shown');
    });
  });
})();
