<?php
// header("Content-Type: multipart/form-data");

header("Access-Control-Allow-Origin: *");
session_start();

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\SMTP;
// require("phpmailer-1.73/phpmailer/class.phpmailer.php");
require_once(dirname(__FILE__) .  "/" . "dao/session.dao.php");
require_once dirname(__FILE__) . "/" . "dto/session.dto.php";
// require_once dirname(__FILE__) . '/' . 'PHPMailer-master/src/PHPMailer.php';
// require_once dirname(__FILE__) . '/' . 'PHPMailer-master/src/Exception.php';
require 'vendor/autoload.php';



// echo "<pre>";
// print_r($_SERVER);
// echo "</pre>";


//** SET VALUES FOR SESSION OBJECT (except passport_img value will be set in the file uploading process)*/ 
$dao = new SessionDAO();
$type_of_visa = $_POST["type_of_visa"];
$date_of_session = time();
$date_of_arrivals = $_POST["date_of_arrivals"];
$airport = $_POST["airport"];
$email = $_POST["email"];
$payment_feedback = $_POST["payment_feedback"];

//these variables are set by admin (not Custiomer)
$session_id = $_POST['session_id'];
$is_done = $_POST['is_done'];
$admin_id = $_POST['admin_id'];

//this variable will be set in the saving-file process below
$img_path = "";
// echo $email . "-------line 40";
// var_dump($_SESSION["ADMIN"]);

if (isset($_POST) && $_POST["method_to_DB"] == "create") {
  //** Overide all dead sessions before */
  $sessions_by_email = $dao->readByEmail($email);
  print_r($sessions_by_email);
  if (count($sessions_by_email) > 0) {
    foreach ($sessions_by_email as $key => $arrayOfSession) {
      $newSes = Session::set($arrayOfSession);
      $newSes->set_is_done("overided");
      $newSes->set_admin_id("1");
      // echo $newSes->get_is_done();
      $dao->update($newSes);
    }
  }

  //** FILE UPLOADING PROCESS */
  $target_dir = "uploads/";
  $target_file = $target_dir . time() . ".png";
  $uploadOk = 1;
  $imageFileType = strtolower(pathinfo($target_file, PATHINFO_EXTENSION));

  //** Check if image file is a actual image or fake image */
  $check = getimagesize($_FILES["passport_img"]["tmp_name"]);
  if ($check !== false) {
    // echo "File is an image - " . $check["mime"] . ".";
    $uploadOk = 1;
  } else {
    echo "File is not an image.";
    $uploadOk = 0;
  }

  //** Check if file already exists */
  if (file_exists($target_file)) {
    echo "Sorry, file already exists.";
    $uploadOk = 0;
  }

  //**Check file size */ 
  if ($_FILES["passport_img"]["size"] > 5000000) {
    echo "Sorry, your file is too large.";
    $uploadOk = 0;
  }

  //** CHECK FILE FORMAT */
  if (
    $imageFileType != "jpg"
    && $imageFileType != "png"
    && $imageFileType != "jpeg"
    && $imageFileType != "gif"
  ) {
    echo "Sorry, only JPG, JPEG, PNG & GIF files are allowed.";
    $uploadOk = 0;
  }

  //**Check if $uploadOk is set to 0 for ERROR, or 1 for UPLOADING AVAILABLE */ 
  if ($uploadOk == 0) {
    echo "Sorry, your file was not uploaded.";
  } else {
    // if everything is ok, try to upload file
    if (move_uploaded_file($_FILES["passport_img"]["tmp_name"], $target_file)) {
      $img_path = $target_file;
      // echo "The file " . basename($_FILES["passport_img"]["name"]) . " has been uploaded.";
    } else {
      echo "Sorry, there was an error uploading your file.";
    }
  }

  // NOW CREATE A ROW IN DATABASE
  $session = new Session(0, $type_of_visa, $date_of_session, $date_of_arrivals, $airport, $email, $img_path, $payment_feedback);
  $dao->create($session);

  // // SEND EMAIL TO OWNER (OFFICER)
  $mailer = new PHPMailer();

  //Server settings
  $mailer->SMTPDebug = SMTP::DEBUG_SERVER;                      // Enable verbose debug output
  $mailer->isSMTP();                                            // Send using SMTP
  $mailer->Host       = 'smtp.gmail.com';                    // Set the SMTP server to send through
  $mailer->SMTPAuth   = true;                                   // Enable SMTP authentication
  $mailer->Username   = 'traveltolittledanang@gmail.com';                     // SMTP username
  $mailer->Password   = 'greenapple!@#goldenapple';                               // SMTP password
  $mailer->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;         // Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` also accepted
  $mailer->Port       = 465; //587;
  // $mailer->SMTPSecure = 'http';

  //Recipients
  $mailer->setFrom("traveltolittledanang@gmail.com");
  $mailer->addAddress("traveltolittledanang@gmail.com");
  // $mailer->addReplyTo('nguyenxtrunghuan@gmail.com');
  $mailer->addCC($email);
  // $mailer->addBCC('nguyenxtrunghuan@gmail.com');

  // CONTENTS
  $mailer->isHTML();
  $mailer->Subject = "Visa Request";
  $mailer->Body = "Customer Email: " . $email . "<br>" .
    "Type of visa: " . $type_of_visa . "<br>" .
    "Date of arrivals: " . $date_of_arrivals . "<br>" .
    "Arrival Airport: " . $airport . "<br>" .
    "Payment Feedback: " . $payment_feedback . "<br>";

  // ATTACHMENT
  $file_to_attach = dirname(__FILE__) . '/' . $img_path;
  $mailer->addAttachment($file_to_attach);
  echo $file_to_attach;
  if (!$mailer->send()) {
    echo $mailer->ErrorInfo;
  };
} else if (isset($_POST) && $_POST['method_to_DB'] == "read_by_email") {
  $result_array = $dao->readByEmail($email);
  echo json_encode($result_array);
} else if (isset($_POST) && $_POST['method_to_DB'] == "read_by_state") {
  $result_array = $dao->readByState($is_done);
  echo json_encode($result_array);
} else if (isset($_POST) && $_POST['method_to_DB'] == "read_by_admin_id") {
  $result_array = $dao->readByState($admin_id);
  echo json_encode($result_array);
} else if (isset($_POST) && $_POST['method_to_DB'] == "delete") {
  $ses_props = $dao->readBySessionID($session_id);
  $dir = dirname(__FILE__) . "/" . $ses_props["img_path"];
  unlink($dir);

  $dao->delete($session_id);
} else if (isset($_POST) && $_POST['method_to_DB'] == "delete_by_state") {
  $all_ses = $dao->readByState($is_done);
  foreach ($all_ses as $key => $ses_props) {
    $dir = dirname(__FILE__) . "/" . $ses_props["img_path"];
    unlink($dir);
  }

  $dao->deleteByState($is_done);
} else if (isset($_POST) && $_POST['method_to_DB'] == "mark_done") {
  // echo $_POST['method_to_DB'];
  $ses_as_array = $dao->readBySessionID($session_id);
  $ses = Session::set($ses_as_array);
  $ses->set_is_done("done");
  $ses->set_admin_id(1);

  $dao->update($ses);
}





// $ses = new Session(0, $type_of_visa, $date_of_session,$date_of_arrivals, $airport, $email, null, $payment_feedback);

// print_r(json_encode($_POST));
// var_dump($_POST);