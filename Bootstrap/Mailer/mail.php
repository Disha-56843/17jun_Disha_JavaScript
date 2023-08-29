<?php
//Import PHPMailer classes into the global namespace
//These must be at the top of your script, not inside a function
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

//Load Composer's autoloader
require 'vendor/autoload.php';

//Create an instance; passing `true` enables exceptions

if(isset($_POST["submit"]))
{  
    
    try {
        
        require 'Exception.php';
        require 'PHPMailer.php';
        require 'SMTP.php';
        $mail = new PHPMailer(true);
    //Server settings
    $mail->SMTPDebug = false;                      //Enable verbose debug output
    $mail->isSMTP();                                            //Send using SMTP
    $mail->Host       = 'smtp.example.com';                     //Set the SMTP server to send through
    $mail->SMTPAuth   = true;                                   //Enable SMTP authentication
    $mail->Username   = 'dishajasani56843@mail.com';                     //SMTP username
    $mail->Password   = 'mbhzizkhpdsvcnrc';                               //SMTP password
    $mail->SMTPSecure = "TLS";            //Enable implicit TLS encryption
    $mail->Port       = 587;                                    //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`

    // //Recipients
    $mail->setFrom($_POST["email"], 'Enquiry contact details');
    $mail->addAddress('dishajasani56843@gmail.com', 'host');     //Add a recipient
    // $mail->addAddress('ellen@example.com');               //Name is optional
    // $mail->addReplyTo('info@example.com', 'Information');
    // $mail->addCC('cc@example.com');
    // $mail->addBCC('bcc@example.com');

    // //Attachments
    // $mail->addAttachment('/var/tmp/file.tar.gz');         //Add attachments
    // $mail->addAttachment('/tmp/image.jpg', 'new.jpg');    //Optional name

    //Content
    $mail->isHTML(true);                                  //Set email format to HTML
    $mail->Subject = 'Enquiry Contact Us ';
    $mail->Body    = '<h2>The customer form data details via contact us Form</h2>'.$_POST["fname"]."<br>".$_POST["lname"]."<br>".$_POST["mail"]."<br>".$_POST["phone"]."<br>".$_POST["message"]."<br>";

    $mail->send();
    echo "<script>
    alert('Thanks for contact with us we will get your details in our emails one of our admin will contact with you Soon')
    window.location='index.html';
    </script>";} 
catch (Exception $e) {
    echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}
}
?>