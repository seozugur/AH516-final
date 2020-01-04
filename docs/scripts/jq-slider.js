$(document).ready(function($) {

    // SliderTest1
    $("#slider1").slider();

    // SliderTest2
    var handle = $( "#custom-handle" );
    $( "#slider2" ).slider({
      create: function() {
        handle.text( $( this ).slider( "value" ) );
      },
      slide: function( event, ui ) {
        handle.text( ui.value );
      }
    });
    
    // RangeSlider
    $( "#slider-range" ).slider({
        range: true,
        min: 1420,
        max: 1919,
        values: [ 1500, 1800 ],
        slide: function( event, ui ) {
          $( "#amount" ).val( "" + ui.values[ 0 ] + " - " + ui.values[ 1 ] );
          var alt = $('#amount').val().split(' ').slice(0)[0];
          var ust = $('#amount').val().split(' ').slice(0)[2]; 
          // for(var iii = 0;;)
          var target = $( ".year" ).attr('class').split(' ').slice(0)[1];
          if( parseInt(target) < parseInt(alt)) {
            document.getElementById("1420").style.display = "none";
          } else if (parseInt(target) >= parseInt(alt)) {
            document.getElementById("1420").style.display = "inline-block";
          }
          console.log(alt + " " + ust + " " + " a " + target);
        }
      });
      $( "#amount" ).val( "" + $( "#slider-range" ).slider( "values", 0 ) +
        " - " + $( "#slider-range" ).slider( "values", 1 ));
        
      // var target = $( ".year" ).attr('class').split(' ').slice(-2)[0];
      // if(parseInt(target) <= ui.values[0]){
      //   console.log(target);
      // };


});