<?php 

    $name = $_POST['sender-name'];
    $visitor_email = $_POST['sender-email'];
    $message = $_POST['sender-message'];

    $email_from = $visitor_email;
    $email_subject = "Marlboro Jamez Website";
    $email_body = "User Name: $name. \n".
                    "User Email: $visitor_email.\n".
                    "User Message: $message. \n";
    
    $to = "jameswilliamsmdl@gmail.com";
    $headers = "From: $email_from \r\n";
    $headers .= "Reply-To: $visitor_email \r\n";

    mail($to, $email_subject, $email_body, $headers);
    header("Location: index.html");
    
?>