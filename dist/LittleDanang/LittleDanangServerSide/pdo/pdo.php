<?php
// header("Access-Control-Allow-Origin: *");
// header("Access-Control-Allow-Methods: PUT, GET, POST, DELETE, OPTIONS");
// header("Access-Control-Allow-Headers: *");
$servername = "localhost:3306";
$username = "root";
$password = "";
// echo json_encode($servername);
// var_dump(isset($_POST));

class DBConnector
{
    private $conn;
    /**
     * Class constructor.
     */
    public function __construct()
    {
        try {
            $this->conn = new PDO("mysql:host=localhost:3306;dbname=little_danang", "root", "");
            // set the PDO error mode to exception
            $this->conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

            // echo "Connected successfully<br>";
        } catch (PDOException $e) {
            echo "Connection failed: " . $e->getMessage();
        }
    }
    public function get_conn()
    {
        return $this->conn;
    }
}
// $neew=new DBConnector();
// $neew->get_conn();
// var_dump($neew);


// try {
//     $dbConnector = new PDO("mysql:host=$servername;dbname=little_danang", $username, $password);
//     // set the PDO error mode to exception
//     $dbConnector->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
//     echo "Connected successfully";
//     }
// catch(PDOException $e)
//     {
//     echo "Connection failed: " . $e->getMessage();
//     }