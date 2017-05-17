<?php
$logo = ($_SERVER['SERVER_NAME']);
$ips = $_SERVER['REMOTE_ADDR'];
$ipl = "http://ipgeobase.ru/?address=";

$referer2 = $_SERVER['HTTP_REFERER'];
$referer2 = urldecode($referer2); 
$referer2 = substr($referer2, 7, 21);
$user_name = htmlspecialchars($_POST['client_name']);
$user_phone = htmlspecialchars($_POST['client_phone']);
$user_name2 = htmlspecialchars($_POST['name']);
$user_phone2 = htmlspecialchars($_POST['tel']);
$mail = htmlspecialchars($_POST['client_mail']);
$client_message = htmlspecialchars($_POST['client_message']);
$prod_name = htmlspecialchars($_POST['success_type']);
$prod_name3 = htmlspecialchars($_POST['send_type']);
$prod_name2 = htmlspecialchars($_POST['category']);
$ref = $_SERVER['HTTP_REFERER'];
parse_str($ref, $output);
$slova = $output['utm_term'];  // ключевые слова
$kompania = $output['utm_campaign']; // название компании



mail($to, $subject, $message, $headers);

 $to  = '375296036822@sms.velcom.by'; 
  $to2  = 'vitaminiby@ya.ru'; 
   $to3  = 'lapanjela@mail.ru';
$subject = 'заявка с  - '.strip_tags($referer2).' - '.$phone.'';
$from = "$name";
// текст письма
$message = '
<html>
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	
	</head>
	<body>
	<p>'.$name_gorod.'</p>
<p>'.$prod_name.'</p>
<p>'.$prod_name3.'</p>
<p>'.$prod_name2.'</p>
<p><strong>&nbsp;</strong> '.$user_name.'</p>
<p><strong>&nbsp;</strong> '.$user_phone.'</p>
<p><strong>&nbsp;</strong> '.$user_name2.'</p>
<p><strong> &nbsp;</strong> '.$user_phone2.'</p>
<p><strong>&nbsp;</strong> '.$client_message.'</p>
<p><strong>&nbsp;</strong> '.$mail.'</p>
<p><strong>&nbsp;</strong> '.$kompania.'</p>



	</body>
</html>

';
$message2 = '
<html>
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	
	</head>
	<body>
	<p>'.$name_gorod.'</p>
<p>'.$prod_name.'</p>
<p>'.$prod_name3.'</p>
<p>'.$prod_name2.'</p>
<p><strong>&nbsp;</strong> '.$user_name.'</p>
<p><strong>&nbsp;</strong> '.$user_phone.'</p>
<p><strong>&nbsp;</strong> '.$user_name2.'</p>
<p><strong> &nbsp;</strong> '.$user_phone2.'</p>
<p><strong>&nbsp;</strong> '.$client_message.'</p>
<p><strong>&nbsp;</strong> '.$mail.'</p>
<p><strong>&nbsp;</strong> '.$kompania.'</p>

<p>'.$slova.'</p>
<p>'.$kompania.'</p>

	</body>
</html>

';

$headers .= 'MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-type: text/html; charset=utf-8' . "\r\n";
$headers .= "From: lapanjela@mail.ru";
mail($to2, $subject, $message2, $headers);
mail($to, $subject, $message, $headers);
mail($to3, $subject, $message, $headers);
$URL="request.html";
header ("Location: $URL");

	?>
	