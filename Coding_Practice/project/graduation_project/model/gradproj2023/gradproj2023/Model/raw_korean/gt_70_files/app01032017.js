
// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
$(document).foundation({

    abide: {
        validators: {
            checkbox_limit: function(el, required, parent) {
                var group = parent.closest( '.checkbox-group' );
                var limit = group.attr('data-abide-validator-limit').split(',');
                var countC = group.find(':checked').length;
                if( countC >= limit[0] && countC <= limit[1] ) {
                    group.find('small.error').hide();
                    //return true so abide can clear any invalid flags on this element
                    return true;
                } else {
                    group.find('small.error').css({display:'block'});
                    //return false and let abide do its thing to make sure the form doesn't submit
                    return false;
                }
            }
        }
    }

});


$(function(){
	var owl=$('.owl-carousel');
		owl.owlCarousel({
		nav:false,
		items:1,
		autoplay:true,
		loop:true,
		dots:false,
		autoplayTimeout:10000,
		autoplaySpeed:2000
	});
$('.carousel-nav .next').on('click',function(){
	owl.trigger('next.owl.carousel');
});
$('.carousel-nav .prev').on('click',function(){
	owl.trigger('prev.owl.carousel');
});
});


$(document).ready(function() {
  var list_target_id = 'audTime'; //first select list ID
  var list_select_id = 'audID'; //second select list ID
  var initial_target_html = '<option value="">Select a city first</option>'; //Initial prompt for target select
 
  $('#'+list_target_id).html(initial_target_html); //Give the target select the prompt option
 
  $('#'+list_select_id).change(function(e) {
    //Grab the chosen value on first select list change
    var selectvalue = $(this).val();
 
    //Display 'loading' status in the target select list
    $('#'+list_target_id).html('<option value="">Loading...</option>');
 
    if (selectvalue == "") {
        //Display initial prompt in target select if blank value selected
       $('#'+list_target_id).html(initial_target_html);
    } else {
      //Make AJAX request, using the selected value as the GET
      $.ajax({
            url: '../../libs/php/audTimes.php?audID='+selectvalue,
            success: function(output) {
                //alert(output);
                $('#'+list_target_id).html(output);
            },
            error: function (xhr, ajaxOptions, thrownError) {
              alert(xhr.status + " "+ thrownError);
            },
            cache: false
        });
        }
    });
});




function calculate_age(birth_month,birth_day,birth_year)
{
    var today_date = new Date();
    var today_year = today_date.getFullYear();
    var today_month = today_date.getMonth();
    var today_day = today_date.getDate();
    var age = today_year - birth_year;

    if ( today_month < (birth_month - 1))
    {
        age--;
    }
    if (((birth_month - 1) == today_month) && (today_day < birth_day))
    {
        age--;
    }
    return age;
}


$(document).ready(function(){

  $('select.dobCheck').change(function() {
      var month = $('#month').val();
      var day = $('#day').val();
      var year = $('#year').val();
      var age = calculate_age(month,day,year);
      if (age < 18) {
            $('#minorSolo').show();
            //$('#minorSolo input, #minorSolo select').prop('required',true);
        } else {
            $('#minorSolo').hide();
            //$('#minorSolo input, #minorSolo select').prop('required',false);
            //$('#minorSolo input, #minorSolo select').removeAttr("data-invalid");
        }
  });
  $('select.dobCheckDuo').change(function() {
        var monthDuo = $('#monthDuo').val();
        var dayDuo = $('#dayDuo').val();
        var yearDuo = $('#yearDuo').val();
        var ageDuo = calculate_age(monthDuo,dayDuo,yearDuo);
        if (ageDuo < 18) {
              $('#minorDuo').show();
              //$('#minorDuo input, #minorDuo select').prop('required',true);
          } else {
              $('#minorDuo').hide();
              //$('#minorDuo input, #minorDuo select').prop('required',false);
              //$('#minorDuo input, #minorDuo select').removeAttr("data-invalid");
          }
  });

//  $('select.dobCheck').change(minorSoloCheck).trigger('change');
//  $('select.dobCheckDuo').change(minorDuoCheck).trigger('change');


  $('#soloDuo').change(function(){
    if ($(this).val()==2) {
        $('#duoSection').show();
        //$('#duoSection input, #duoSection select').prop('required',true);
    } else {
        $('#duoSection').hide();
        //$('#duoSection input, #duoSection select').prop('required',false);
        //$('#duo_parent_name').removeAttr("required");
    }
  $('select.dobCheck').change();
  $('select.dobCheckDuo').change();

  });

//force them to check after page loads
  $('#soloDuo').change();
  $('select.dobCheck').change();
  $('select.dobCheckDuo').change();

});


