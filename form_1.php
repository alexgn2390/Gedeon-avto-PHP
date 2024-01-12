<?php

//use PHPMailer\PHPMailer\PHPMailer;
//use PHPMailer\PHPMailer\SMTP;
//use PHPMailer\PHPMailer\Exception;
//
//require 'vendor/autoload.php';
//// Создание экземпляра объекта PHPMailer
//$mail = new PHPMailer(true);
//
//
//$phone = $_POST['phone'];
////$selectedValues = $_POST['selectedValues'];
//
//
//try {
//    // Настройки сервера SMTP
//    $mail->isSMTP();
//    $mail->Host = 'smtp.gmail.com';
//    $mail->SMTPAuth = true;
//    $mail->Username = 'dan.lana.miki@gmail.com';
//    $mail->Password = '48067522dan';
//    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
//    $mail->Port = 587;
//
//    // Настройки сообщения
//    $mail->setFrom('dan.lana.miki@gmail.com', 'Александр');
//    $mail->addAddress('podbor_avto@podbor-avto96.ru', 'Евгений');
//    $mail->addReplyTo('dan.lana.miki@gmail.com', 'Александр');
//
//    // Добавление вложения
//    //$mail->addAttachment('/var/tmp/file.tar.gz');
//    //$mail->addAttachment('/tmp/image.jpg', 'new.jpg');
//
//    // Настройки содержимого сообщения
//    $mail->isHTML(true);
//    $mail->Subject = 'Заявка с моего сайта';
//    $mail->Body = $phone . " Номер телефона клиента";
//    $mail->AltBody = 'Текст сообщения в формате plain text';
//
//    // Отправка сообщения
//    $mail->send();
//    echo 'Сообщение отправлено';
//} catch (Exception $e) {
//    echo "Ошибка отправки сообщения: {$mail->ErrorInfo}";
//}


//проверяем тип запроса, обрабатываем только POST
if ($_SERVER["REQUEST_METHOD"] == "POST") {

//получаем параметры, посланные с javascript
    $phone = $_POST['phone'];
//    $token = "6223569920:AAEQ3NFTl2EKrBoMm1XxqAwTRP7ueh55AsI";
//    $chat_id = "-1001966753402";

    $content =  'Вам поступила заявка на консультацию с сайта podbor-avto96.ru, телефон: ' .  $phone;


    $headers = 'MIME-Version: 1.0' . "\r\n";
    $headers = 'Content-type: text/html; charset=utf-8' . "\r\n";
//первый параметр - кому отправляем письмо, второй - тема письма, третий - содержание
    $success = mail("podbor-auto96@yandex.ru", 'Запрос на индивидуальную консультацию', $content, $headers);
//    $sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$content}","r");
//    $success = mail("podbor_avto@podbor-avto96.ru ", 'заявка на подбор авто', $content, $headers);

    if ($success) {
        http_response_code(200);
        echo "Письмо отправлено";
    } else {

        http_response_code(500);
        echo "Письмо не отправлено";
    }

} else {
//Если это не POST запрос -возвращаем код 403(действие запрещено)
    http_response_code(403);
    echo "Данный метод запроса не поддерживается сервером";
}


