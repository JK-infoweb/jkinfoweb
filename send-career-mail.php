
<?php
//print_r($_FILE); exit();
if ( isset($_POST)){
    if (!empty($_POST['namecv']) && !empty($_POST['emailcv']) && !empty($_POST['phonecv']) && !empty($_POST['designationcv']) && !empty($_POST['current_ctc']) && !empty($_POST['expected_ctc']) ){


         $namecv = $_POST['namecv'];
         $emailcv = $_POST['emailcv'];
         $phonecv = $_POST['phonecv'];
         $designationcv = $_POST['designationcv'];
         $current_ctc = $_POST['current_ctc'];
         $expected_ctc = $_POST['expected_ctc'];
//         $chooseFile = $_FILES['chooseFile'];
        $file = file_get_contents ($_FILES['form_resume']);
        
           
//  $body = $name."\n".$email."\n".$services."\n".$phone."\n".$description;
    $message    =   "
        Sent:   $namecv \r
        ---------------------------------------------------
        Name:    $namecv\r
        Email:   $emailcv\r
        Phone:   $phonecv\r
        Description: $designationcv\r
        Current CTC: $current_ctc\r
        Expected CTC:   $expected_ctc\r
        Form_resume: $form_resume\r
    ";


          


        $email_from = 'hr@jkinfoweb.com';
        $headers = 'From: '.$email_from."\r\n" .
                    'X-Mailer: PHP/' . phpversion();
//             $headers = "From: $email_from\r\n";
//            $headers .= "MIME-Version: 1.0\r\n"
//                . "Content-Type: multipart/mixed; boundary=\"1a2a3a\"";
    //echo $message; exit; 
      if(mail('hr@jkinfoweb.com', 'Career Form Inquiry ', $message , $headers)){
        echo 1; exit;
      } 
        else {
          echo 'There is a problem in sending mail.';
         }
    }

 }
//$file = file_get_contents($_FILES['choosefile']);
          $attachFiles(['form_resume']);

?>

