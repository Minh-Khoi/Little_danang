<?php
require_once dirname(__FILE__, 2) . "/pdo/pdo.php";
require_once dirname(__FILE__, 2) . "/dto/admin.dto.php";
error_reporting(E_ERROR | E_PARSE);

// echo $_SERVER["DOCUMENT_ROOT"] . "<br>";
class AdminDAO
{
    private $conn;

    // CONSTRUCTOR
    /**
     * Class constructor.
     */
    public function __construct()
    {
        $dbConnector = new DBConnector();
        $this->conn = $dbConnector->get_conn();
    }
    // CRUD
    public function create(Admin $admin)
    {
        try {
            $SQL = "INSERT INTO admins (fullname, officer_code, password)
                                    VALUES (:fullname, :officer_code,:password)";
            $stmt = $this->conn->prepare($SQL);
            $stmt->bindParam(":fullname", $admin->get_fullname());
            $stmt->bindParam(":officer_code", $admin->get_officer_code());
            $stmt->bindParam(":password", $admin->get_password());
            $stmt->execute();
            // echo "01 session added";
        } catch (PDOException $e) {
            echo "Error: " . $e->getMessage();
        }
    }

    public function readAll()
    {
        try {
            $SQL = "Select * from admins";
            $stmt = $this->conn->prepare($SQL);

            $stmt->execute();
            $result = $stmt->fetchAll();
            // echo "read all sessioons<br>";
            // echo "<pre>";
            // print_r($result);
            // echo "</pre>";
            return ($result);
        } catch (PDOException $e) {
            echo "Error: " . $e->getMessage();
        }
    }

    public function readByOfficerCode($officer_code)
    {
        try {
            $SQL = "Select * from admins where officer_code= :officer_code";
            $stmt = $this->conn->prepare($SQL);
            $stmt->bindParam(":officer_code", $officer_code);

            $stmt->execute();
            $result = $stmt->fetchAll();
            // echo "read all sessioons<br>";
            // echo "<pre>";
            // print_r($result);
            // echo "</pre>";
            return ($result[0]);
        } catch (PDOException $e) {
            echo "Error: " . $e->getMessage();
        }
    }

    public function readByName($fullname)
    {
        try {
            $SQL = "Select * from admins where fullname= :fullname";
            $stmt = $this->conn->prepare($SQL);
            $stmt->bindParam(":fullname", $fullname);

            $stmt->execute();
            $result = $stmt->fetchAll();
            // echo "read all sessioons<br>";
            // echo "<pre>";
            // print_r($result);
            // echo "</pre>";
            return ($result);
        } catch (PDOException $e) {
            echo "Error: " . $e->getMessage();
        }
    }

    public function readByAdminID($admin_id)
    {
        try {
            $SQL = "Select * from admins where admin_id= :admin_id";
            $stmt = $this->conn->prepare($SQL);
            $stmt->bindParam(":admin_id", $admin_id);

            $stmt->execute();
            $result = $stmt->fetchAll();
            // echo "read all sessioons<br>";
            // echo "<pre>";
            // print_r($result);
            // echo "</pre>";
            return ($result[0]);
        } catch (PDOException $e) {
            echo "Error: " . $e->getMessage();
        }
    }


    public function update(Admin $admin)
    {
        try {
            $SQL = "UPDATE sessions_visa SET offical_code=:officer_code, 
                                             fullname=:fullname,
                                             password=:password
                                        WHERE admin_id= :admin_id";
            $stmt = $this->conn->prepare($SQL);
            $stmt->bindParam(":officer_code", $admin->get_officer_code());
            $stmt->bindParam(":visa_number", $admin->get_fullname());
            $stmt->bindParam(":date_of_arrivals", $admin->get_password());
            $stmt->bindParam(":admin_id", $admin->get_admin_id());

            $stmt->execute();
            // echo "01 session added";
        } catch (PDOException $e) {
            echo "Error: " . $e->getMessage();
        }
    }

    public function delete($admin_id)
    {
        try {
            $SQL = "DELETE FROM sessions_visa WHERE admin_id=:admin_id";
            $stmt = $this->conn->prepare($SQL);
            $stmt->bindParam(":admin_id", $admin_id);

            $stmt->execute();
            // echo "01 session added";
        } catch (PDOException $e) {
            echo "Error: " . $e->getMessage();
        }
    }
}
// $dao = new SessionDAO();
// $session = new Session(2, "FUCK YOU", "99664", "10/02/2019", "Phu Bai", "hahah@bcd", "isduhfsldjfjsdk;fil/kfjslsfsd", "NEVER");
// $dao->create($session);
// $dao->readByVisaNumber(55555);
// $dao->delete(2);
