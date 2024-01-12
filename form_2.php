<?php
//проверяем тип запроса, обрабатываем только POST
if ($_SERVER["REQUEST_METHOD"] == "POST") {

//получаем параметры, посланные с javascript
    $phone = $_POST['phone'];
    $selectedValues = $_POST['selectedValues'];
    $budget = $_POST['budget'];
    $carBrand = $_POST['carBrand'];
//    $token = "6223569920:AAEQ3NFTl2EKrBoMm1XxqAwTRP7ueh55AsI";
//    $chat_id = "-1001966753402";

    $message_body = "Вам поступила заявка на консультацию с сайта podbor-avto96.ru, телефон: " . $phone . "<br>";
    $message_body .= "Предполагаемый бюджет: " . $budget . "<br>";
    $message_body .= "Предпочитаемые марки и модели: " . $carBrand . "<br>";
    $message_body .= "Выбранные значения: " . $selectedValues;


    $headers = 'MIME-Version: 1.0' . "\r\n";
    $headers = 'Content-type: text/html; charset=utf-8' . "\r\n";
//первый параметр - кому отправляем письмо, второй - тема письма, третий - содержание
    $success = mail("podbor-auto96@yandex.ru", 'Запрос на индивидуальную консультацию', $message_body, $headers);
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









//
//
//// Проверяем, был ли отправлен POST запрос с данными из формы
//if ($_SERVER['REQUEST_METHOD'] === 'POST') {
//
//    // Получаем данные из POST запроса
//    $message = $_POST['message'];
//    $selectedValues = $_POST['selectedValues'];
//
//    // Задаем email адрес, на который будут приходить письма
//    $to = 'podbor_avto@podbor-avto96.ru';
//
//    // Задаем тему письма
//    $subject = 'Новая заявка с сайта';
//
//    // Задаем заголовки для письма
//    $headers = "From: " . strip_tags($to) . "\r\n";
//    $headers .= "Reply-To: ". strip_tags($to) . "\r\n";
//    $headers .= "CC: susan@example.com\r\n";
//    $headers .= "MIME-Version: 1.0\r\n";
//    $headers .= "Content-Type: text/html; charset=UTF-8\r\n";
//
//    // Создаем текст письма
//    $message_body = "Анкета " . $message . "<br>";
//    $message_body .= "Выбранные значения: " . $selectedValues;
//
//    // Отправляем письмо на указанный email
//    mail($to, $subject, $message_body, $headers);
//
//    // Возвращаем успешный статус клиенту
//    http_response_code(200);
//    echo 'Спасибо за заявку!';
//
//} else {
//    // Возвращаем ошибку клиенту, если запрос не был POST запросом
//    http_response_code(400);
//    echo 'Ошибка: запрос не был отправлен методом POST.';
//}