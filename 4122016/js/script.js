$(function()
{

$("#button-blue").click(function(e) {
    var url = "../contactform.php"; // the script where you handle the form input.
    var email=$("#email").val();
    if (!validateEmail(email)){
    	
       	    $("#contact-form").append("<p>Please enter a valid email bitch.</p>");

    	return false;
    }
    var data=$("#contact-form").serializeArray();
    $.ajax({
       type: "POST",
       url: url,
       data:data, // serializes the form's elements.
       success: function(data)
       {
       	    $("#contact-form").empty();
       	    $("#contact-form").append("<p>Your Email Was Sent</p>");
           //alert(data); // show response from the php script.
       },
       error: function(d)
       {
       		console.log(data);
         	console.log(d);
       }
    });
    e.preventDefault();
});


});


function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}
