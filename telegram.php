
<?php
$botToken = '5867434535:AAFftgu0XxgdMqmo3Gtq9WP0zXC3gHMFEgc';
$chat_id = '-943203043';
$emailTo = 'podbor_avto@podbor-avto96.ru ';
$emailFrom = 'Gedeon-avto';
$emailSubject = 'Запрос на индивидуальную консультацию';
$message = "Анкета:\n" .
    "Телефон: " . $_POST["phone"] . "\n" .


// отправляем сообщение на почту
$headers = "From: $emailFrom\r\n" ;
mail($emailTo, $emailSubject, $message, $headers);

// отправляем сообщение в Telegram
$url = "https://api.telegram.org/bot" . $botToken . "/sendMessage";
$data = array('chat_id' => $chat_id, 'text' => $message);
$options = array(
    'http' => array(
        'header'  => "Content-type: application/x-www-form-urlencoded\r\n",
        'method'  => 'POST',
        'content' => http_build_query($data),
        'context' => stream_context_create([
            'socket' => [
                'bindto' => '0:0'
            ]
        ])
    ),
);
$context  = stream_context_create($options);
$result = file_get_contents($url, false, $context);

echo $result;
?>


<!---->
<!--$botToken = '5867434535:AAFftgu0XxgdMqmo3Gtq9WP0zXC3gHMFEgc';-->
<!--$chat_id = '-943203043';-->












<!--/* https://api.telegram.org/bot5541879256:AAGMUIhbfdD6ypl5jkCPy8F_dFLmY4oWjrA/getUpdates,-->
<!--где, XXXXXXXXXXXXXXXXXXXXXXX - токен вашего бота, полученный ранее */-->
<!---->
<!--//$name = $_POST['name'];-->
<!--//$phone = $_POST['phone'];-->
<!--//$token = "5867434535:AAFftgu0XxgdMqmo3Gtq9WP0zXC3gHMFEgc";-->
<!--//$chat_id = "-943203043";-->
<!--//$arr = array(-->
<!--//    'Имя пользователя: ' => $name,-->
<!--//    'Телефон: ' => $phone-->
<!--//);-->
<!--//-->
<!--//foreach($arr as $key => $value) {-->
<!--//    $txt .= "<b>".$key."</b> ".$value."%0A";-->
<!--//};-->
<!--//-->
<!--//$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");-->
<!--//-->
<!--//if ($sendToTelegram) {-->
<!--//    header('Location: thank-you.html');-->
<!--//} else {-->
<!--//    echo "Error";-->
<!--//}-->
<!--//-->