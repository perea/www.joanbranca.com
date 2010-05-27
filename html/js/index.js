$(function() {
  $('a.lightbox').lightBox(); // Select all links with lightbox class

  $('a.nav_services').click(
    function() {
      $('.gallerytab').hide();
      $(".gallerytab[rel='" + this.rel + "']").show();
    })
});

