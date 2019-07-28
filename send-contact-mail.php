<?php
//print_r($_POST); exit();
if ( isset($_POST) ){
    if (!empty($_POST['name']) && !empty($_POST['email']) && !empty($_POST['number']) && !empty($_POST['services']) && !empty($_POST['description'])){
         $name = $_POST['name'];
         $email = $_POST['email'];
         $number = $_POST['number'];
         $services = $_POST['services'];
         $description = $_POST['description'];

    //  $body = $name."\n".$services."\n".$phone."\n".$email."\n".$description;
     $message	=	"
        Sent:   $name \r
        ---------------------------------------------------
        Name:    $name\r
        Email:   $email\r
        Phone:   $number\r
        Services:    $services\r
        Description: $description\r
    ";

        $email_from = 'info@jkinfoweb.com';
        $headers = 'From: '.$email_from."\r\n" .
                    'X-Mailer: PHP/' . phpversion();

        if(mail('info@jkinfoweb.com', 'Contact form Inquiry ', $message , $headers)){
            //echo '<color font="black">Thanks for your contacting.</font>';
            echo 1; exit;
        } 
        else {
          echo 'There is a problem in sending mail.';
         }
    } 
}  



?>
