$(function()
{

$("#button-blue").click(function(e) {
    var url = "../contactform.php"; // the script where you handle the form input.
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