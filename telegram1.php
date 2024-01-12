<?php
/* https://api.telegram.org/bot5867434535:AAFftgu0XxgdMqmo3Gtq9WP0zXC3gHMFEgc/getUpdates,
где, XXXXXXXXXXXXXXXXXXXXXXX - токен вашего бота, полученный ранее */

$name = $_POST['name'];
$phone = $_POST['phone'];
$token = "5867434535:AAFftgu0XxgdMqmo3Gtq9WP0zXC3gHMFEgc";
$chat_id = "-943203043";
$arr = array(
    'Имя пользователя: ' => $name,
    'Телефон: ' => $phone
);

foreach($arr as $key => $value) {
    $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

if ($sendToTelegram) {
    header('Location: thank-you.html');
} else {
    echo "Error";
}
?>