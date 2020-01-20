<?php
header("Access-Control-Allow-Origin: *");
session_start();
require_once(dirname(__FILE__) .  "/" . "dao/session.dao.php");
require_once dirname(__FILE__) . "/" . "dto/session.dto.php";

$all_ses = $dao->readSessionBeforDay(time() - 2678400);
foreach ($all_ses as $key => $ses_props) {
    $dir = dirname(__FILE__) . "/" . $ses_props["img_path"];
    unlink($dir);
}

$dao = new SessionDAO();
$dao->deleteOverdatedSession(time() - 2678400);