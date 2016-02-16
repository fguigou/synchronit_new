<?php
/*set_include_path('/var/www/mail');*/
require 'mail/PHPMailerAutoload.php';


$mail = new PHPMailer;

$name = $_POST['name'];
$email = $_POST['from'];
$message = $_POST['message'];
$subject =  $_POST['from'];


$mail->isSMTP();    
$mail->SMTPDebug = 1;// Set mailer to use SMTP
$mail->Host = 'smtpout.secureserver.net';  // Specify main and backup server
$mail->SMTPAuth = true;    // Enable SMTP authentication
$mail->Username = 'btobler@synchronit.com';                            // SMTP username
$mail->Password = 'changeme';                           // SMTP password
$mail->Port = 465;
$mail->SMTPSecure = 'ssl';                            // Enable encryption, 'ssl' also accepted

$mail->From = 'contact@synchronit.com';
$mail->FromName = 'Synchronit Team';
$mail->addAddress($email);  // Add a recipient

$mail->WordWrap = 50;                                 // Set word wrap to 50 characters
$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = 'Thank you for contact us!';

$mail->msgHTML(file_get_contents(__DIR__ .'/messages/contactUs.html'));

if(!$mail->send()) {
   echo 'Message could not be sent.';
   echo 'Mailer Error: ' . $mail->ErrorInfo;
   exit;
}

echo 'Message has been sent';

$mail = new PHPMailer;

$name = $_POST['name'];
$email = $_POST['from'];
$message = $_POST['message'];
$subject =  $_POST['subject'];


$mail->isSMTP();    
$mail->SMTPDebug = 1;// Set mailer to use SMTP
$mail->Host = 'smtpout.secureserver.net';  // Specify main and backup server
$mail->SMTPAuth = true;    // Enable SMTP authentication
$mail->Username = 'btobler@synchronit.com';                            // SMTP username
$mail->Password = 'changeme';                           // SMTP password
$mail->Port = 465;
$mail->SMTPSecure = 'ssl';                            // Enable encryption, 'ssl' also accepted

$mail->From = $email;
$mail->FromName = 'Synchronit';
$mail->addAddress('btobler@synchronit.com');  // Add a recipient

$mail->WordWrap = 50;                                 // Set word wrap to 50 characters
$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = 'Mensaje desde el sitio web - ' .$subject;
$mail->Body    = ' Nombre: '.$name.'</br> Mensaje: '.$message;

if(!$mail->send()) {
   echo 'Message could not be sent.';
   echo 'Mailer Error: ' . $mail->ErrorInfo;
   exit;
}

echo 'Message has been sent';