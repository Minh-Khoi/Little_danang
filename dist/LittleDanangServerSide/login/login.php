<?php
// header("Content-Type: multipart/form-data");
header("Access-Control-Allow-Origin: *");
session_id('littledanangSession');
session_start();

require_once(dirname(__FILE__, 2) .  "/" . "dao/admin.dao.php");
require_once dirname(__FILE__, 2) . "/" . "dto/admin.dto.php";

//** SET VALUES FOR ADMIN OBJECT ()*/ 
$admin = new AdminDAO();
$officer_code = $_POST["officer_code"];
$password = $_POST["password"];
// $officer_code = "010-865";
// $password = "pa08";

$result = $admin->readByOfficerCode($officer_code);
// echo json_encode($result);
if (isset($result) && $result["password"] == md5($password)) {
    $_SESSION["ADMIN"] = $officer_code;
    $_SESSION["PASSWORD"] = $password;

    // echo $result['password'] . " == " . $password . "<br>";
    // echo "Login successfully";
    echo true;
} else {
    echo false;
}
// print_r($_SESSION["ADMIN"]);