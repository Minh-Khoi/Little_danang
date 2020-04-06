<?php
header("Access-Control-Allow-Origin: *");
session_id('littledanangSession');
session_start();

// var_dump($_SESSION);

if ($_POST['loading'] == 'unloading') {
    session_destroy();
    echo false;
} else {
    // if the admin login information is valid, keep it on, if not, response to client
    $officer_code = $_POST['official_code'];
    $password = $_POST['password'];

    if ($officer_code == $_SESSION['ADMIN'] && $password == $_SESSION['PASSWORD']) {
        echo true;
    } else {
        echo false;
    }
}