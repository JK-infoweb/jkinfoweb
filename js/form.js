var $ = jQuery.noConflict();

/*---------------------------------------------*/
/*     * contact-form                          */
/*---------------------------------------------*/

$(window).load(function (event) {
	event.preventDefault();
	$("#contact-form").validate({
 		ignore: [],
		rules: {
			name:{ required: true, minlength: 2 },
			email:{ required: true,email:true},
			number:{ required: true,number:true},
			services:{ required: true},
			description:{ required: true,maxlength: 1000 },
		},
		errorClass:'error',
		validClass:'valid',
		errorElement:'div',
		highlight: function (element, errorClass, validClass) { 
			$(element).addClass(errorClass).removeClass(validClass); 
		}, 
		unhighlight: function (element, errorClass, validClass) { 
			$(element).removeClass(errorClass).addClass(validClass);
		},
		
		errorPlacement: function(error, element) {
			error.insertAfter(element);
		},
		submitHandler: function (form) {
			$(".submit-wrap").append('<p id="loading">Loading...</p>');
				$.ajax({
				  url : 'send-contact-mail.php',
				  type : 'POST',
				  data : $('#contact-form').serialize(),
				  dataType:"json",
				  beforeSend : function(){
					
				  },
				  success : function(responce){
					 if( responce == 1 ){
					 	$("#loading").text('');
				 		document.getElementById("contact-form").reset();
				 		$("input[type=text], textarea").val("");
                        $('.successmsg').fadeIn();
                        $('.successmsg').fadeOut( 5000 );
                     }
                },
				  error: function(xhr, ajaxOptions, thrownError) {
					alert(thrownError + "\r\n" + xhr.statusText + "\r\n" + xhr.responseText);
				  }
				},5000);
				return false; // required to block normal submit since you used ajax
			  }
	});

    $(".submit-button").click(function(){
        setTimeout(function(){
            $("form input.error").first().focus();
        },50) 
    })
});

/*---------------------------------------------*/
/*     * career-form                           */
/*---------------------------------------------*/
$(window).load(function () {
	$("#creative_cv-form").validate({
 		ignore: [],
		rules: {
			namecv:{ required: true, minlength: 2 },
			emailcv:{ required: true,email:true},
			phonecv:{ required: true},
			designationcv:{ required: true},
			current_ctc:{ required: true},
			expected_ctc:{ required: true},
			form_resume:{ required: true},
			formcaptcha:{ required: true},
		},
		errorClass:'error',
		validClass:'valid_cv',
		errorElement:'div',
		highlight: function (element, errorClass, validClass) { 
			$(element).addClass(errorClass).removeClass(validClass); 
		}, 
		unhighlight: function (element, errorClass, validClass) { 
			$(element).removeClass(errorClass).addClass(validClass);
		},
		
		errorPlacement: function(error, element) {
			error.insertAfter(element);
		},
        submitHandler: function (form) {
			$(".submit-wrap").append('<p id="loading">Loading...</p>');
				$.ajax({
				  url : 'send-career-mail.php',
				  type : 'POST',
				  data : $('#creative_cv-form').serialize(),
				  dataType:"json",
				  beforeSend : function(){
					
				  },
				  success : function(responce){
					 if( responce == 1 ){
					 	$("#loading").text('');
				 		document.getElementById("creative_cv-form").reset();
				 		$("input[type=text], textarea").val("");
                        $("#noFile").text("No file chosen..."); 
                        $('.successmsg').fadeIn();
                        $('.successmsg').fadeOut( 5000 );
					 }
                },
				  error: function(xhr, ajaxOptions, thrownError) {
					alert(thrownError + "\r\n" + xhr.statusText + "\r\n" + xhr.responseText);
				  }
				},5000);
				return false; // required to block normal submit since you used ajax
			  }
	});

    $(".cr.submit-button").click(function(){
//        $('#capchspan').show();
        setTimeout(function(){
            $("form input.error").first().focus();
        },50) 
    })
});
