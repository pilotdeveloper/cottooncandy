<?php
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['comment'];
    $from = 'From: Cottoon Candy';
    $to = 'brunomagalhaes@live.com';
    $subject = 'Hello';
    $human = $_POST['human'];

    //include config.php
    //$mysql = 'localhost';
    

    $body = "From: $name\r\n E-Mail: $email\r\n Message:\r\n $message";

    if ($_POST['submit'] && $human == '4') {
        if (mail ($to, $subject, $body, $from)) {
	       echo '<p>Your message has been sent!</p>';
	    } else {
	       echo '<p>Something went wrong, go back and try again!</p>';
        }
    } else if ($_POST['submit'] && $human != '4') {
	   echo '<p>You answered the anti-spam question incorrectly!</p>';
    }
?>
