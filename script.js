var numPanels = $('.panel').length;

function checkZ($aPanel) {
  if ( $aPanel.hasClass('open') ) {
    $aPanel.css('z-index','1');
  } else {
    // set z-index back to original stored in data
    zIdx = $aPanel.data('zIdx');
    $aPanel.css( 'z-index', zIdx );
  }
}

// loop through all panels and reverse sort via zIdx
for (i=0; i<(numPanels); i++  ) {
  var zIdx =  numPanels-i;
  $('.panel').eq(i).css('z-index',zIdx).data('zIdx',zIdx);
}

// when clicking the front panel add class 'open' to panel
// if clicking bacl panel, remove 'open' from panel
$('.panel').on('click', '.front, .back', function() {
  $(this).parent('.panel').toggleClass('open');
  checkZ($(this).parent('.panel'));
});