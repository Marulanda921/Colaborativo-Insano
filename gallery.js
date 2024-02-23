// Create a lightbox
(function() {
    let $lightbox = $("<div class='lightbox'></div>");
    let $img = $("<img>");
    let $caption = $("<p class='caption'></p>");
  
    // Add image and caption to lightbox
  
    $lightbox
      .append($img)
      .append($caption);
  
    // Add lighbox to document
  
    $('body').append($lightbox);
  
    $('.lightbox-gallery img').click(function(e) {
      e.preventDefault();
  
      // Get image link and description
      let src = $(this).attr("data-image-hd");
      let cap = $(this).attr("alt");
  
      // Add data to lighbox
  
      $img.attr('src', src);
      $caption.text(cap);
  
      // Show lightbox
  
      $lightbox.fadeIn('fast');
  
      $lightbox.click(function() {
        $lightbox.fadeOut('fast');
      });
    });
  
  }());