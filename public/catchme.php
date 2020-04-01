<?php
header("Access-Control-Allow-Origin: *");
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if (isset($_POST['username'])) {
        $username = $_POST['username'];
    }
    if (isset($_POST['email'])) {
        $email = $_POST['email'];
    }
    if (isset($_POST['birthdate'])) {
        $birthdate = $_POST['birthdate'];
    }
}
$horoscope = "Your visionary tendencies are in the ascendant today, Virgo, although they take more of a practical than mystical bent. You might look at your living room or backyard and suddenly find yourself redecorating it in your mind's eye. If you've wanted to start some sort of long-term project to improve your surroundings, this is the day to get started. You'll not only attain your vision, you may surpass it. Have fun!";
$returnData = [];
$returnData['username']=$username;
$returnData['email']=$email;
$returnData['birthdate']=$birthdate;
$returnData['server']=$horoscope;  //$_SERVER['SERVER_NAME'];
$returnJSON = json_encode($returnData);
echo $returnJSON;