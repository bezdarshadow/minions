(() => {
  $('.about-us-btn').click(function () {
    const validateText = $('.is-shown');
    if (validateText.text() === 'Read more') {
      $('[data-more-text]').show('slow');
    } else {
      $('[data-more-text]').hide('slow');
    }
    $('.btn-text').each(function () {
      $(this).toggleClass('is-shown');
    });
  });
})();
