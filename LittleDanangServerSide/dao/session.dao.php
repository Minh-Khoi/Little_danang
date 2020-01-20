<?php
require_once dirname(__FILE__, 2) . "/pdo/pdo.php";
require_once dirname(__FILE__, 2) . "/dto/session.dto.php";
error_reporting(E_ERROR | E_PARSE);

// echo $_SERVER["DOCUMENT_ROOT"] . "<br>";
class SessionDAO
{
    // private $session_id, $type_of_visa, $date_of_session, $date_of_arrival, $airport, $email, $img_path, $payment_feedback;
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
    public function create(Session $session)
    {
        try {
            $SQL = "INSERT INTO sessions_visa (type_of_visa, date_of_session,date_of_arrivals,
                                                        airport, email, img_path, payment_feedback)
                                    VALUES (:type_of_visa, :date_of_session,:date_of_arrivals,
                                                        :airport, :email, :img_path, :payment_feedback)";
            $stmt = $this->conn->prepare($SQL);
            $stmt->bindParam(":type_of_visa", $session->get_type_of_visa());
            $stmt->bindParam(":date_of_session", $session->get_date_of_session());
            $stmt->bindParam(":date_of_arrivals", $session->get_date_of_arrivals());
            $stmt->bindParam(":airport", $session->get_airport());
            $stmt->bindParam(":email", $session->get_email());
            $stmt->bindParam(":img_path", $session->get_img_path());
            $stmt->bindParam(":payment_feedback", $session->get_payment_feedback());

            $stmt->execute();
            // echo "01 session added";
        } catch (PDOException $e) {
            echo "Error: " . $e->getMessage();
        }
    }

    public function readAll()
    {
        try {
            $SQL = "Select * from sessions_visa";
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

    public function readByEmail($email)
    {
        try {
            $SQL = "Select * from sessions_visa where email= :email";
            $stmt = $this->conn->prepare($SQL);
            $stmt->bindParam(":email", $email);

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

    public function readByState($is_done)
    {
        try {
            $SQL = "Select * from sessions_visa where is_done= :is_done";
            $stmt = $this->conn->prepare($SQL);
            $stmt->bindParam(":is_done", $is_done);

            $stmt->execute();
            $result = $stmt->fetchAll();
            // $results = [];
            // $result = $stmt->fetch(PDO::FETCH_ASSOC);
            // while ($result = $stmt->fetch(PDO::FETCH_ASSOC)) {
            //     array_push($results, $result);
            // };
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
            $SQL = "Select * from sessions_visa where admin_id= :admin_id";
            $stmt = $this->conn->prepare($SQL);
            $stmt->bindParam(":admin_id", $admin_id);

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

    public function readSessionBeforDay($date_time)
    {
        try {
            $SQL = "Select * from sessions_visa where date_of_session <= :date_time";
            $stmt = $this->conn->prepare($SQL);
            $stmt->bindParam(":date_of_session", $date_time);

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

    public function readBySessionID($session_id)
    {
        try {
            $SQL = "Select * from sessions_visa where session_id= :session_id";
            $stmt = $this->conn->prepare($SQL);
            $stmt->bindParam(":session_id", $session_id);

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



    public function update(Session $session)
    {
        try {
            $SQL = "UPDATE sessions_visa SET type_of_visa=:type_of_visa, 
                                             date_of_session=:date_of_session,
                                             date_of_arrivals=:date_of_arrivals,
                                             airport = :airport, 
                                             email=:email, 
                                             img_path=:img_path, 
                                             payment_feedback= :payment_feedback ,
                                             is_done = :is_done,
                                             admin_id = :admin_id
                                        WHERE session_id= :session_id";
            $stmt = $this->conn->prepare($SQL);
            $stmt->bindParam(":type_of_visa", $session->get_type_of_visa());
            $stmt->bindParam(":date_of_session", $session->get_date_of_session());
            $stmt->bindParam(":date_of_arrivals", $session->get_date_of_arrivals());
            $stmt->bindParam(":airport", $session->get_airport());
            $stmt->bindParam(":email", $session->get_email());
            $stmt->bindParam(":img_path", $session->get_img_path());
            $stmt->bindParam(":payment_feedback", $session->get_payment_feedback());
            $stmt->bindParam(":session_id", $session->get_session_id());
            $stmt->bindParam(":is_done", $session->get_is_done());
            $stmt->bindParam(":admin_id", $session->get_admin_id());

            $stmt->execute();
            // echo "01 session updated";
        } catch (PDOException $e) {
            echo "Error: " . $e->getMessage();
        }
    }

    public function delete($session_id)
    {
        try {
            $SQL = "DELETE FROM sessions_visa WHERE session_id=:session_id";
            $stmt = $this->conn->prepare($SQL);
            $stmt->bindParam(":session_id", $session_id);

            $stmt->execute();
            // echo "01 session added";
        } catch (PDOException $e) {
            echo "Error: " . $e->getMessage();
        }
    }

    public function deleteByState($is_done)
    {
        try {
            $SQL = "DELETE FROM sessions_visa WHERE is_done=:is_done";
            $stmt = $this->conn->prepare($SQL);
            $stmt->bindParam(":is_done", $is_done);

            $stmt->execute();
            echo "01 session added";
        } catch (PDOException $e) {
            echo "Error: " . $e->getMessage();
        }
    }

    public function deleteOverdatedSession($time)
    {
        try {
            $todayTime = time();
            $SQL = "DELETE FROM sessions_visa WHERE date_of_session<=:date_of_session";
            $stmt = $this->conn->prepare($SQL);
            $stmt->bindParam(":date_of_session", $time);

            $stmt->execute();
            echo "01 session added";
        } catch (PDOException $e) {
            echo "Error: " . $e->getMessage();
        }
    }
}

// $dao = new SessionDAO();
// $session = new Session(2, "FUCK YOU", "99664", "10/02/2019", "Phu Bai", "hahah@bcd", "isduhfsldjfjsdk;fil/kfjslsfsd", "NEVER");
// $dao->create($session);
// print_r($dao->readByState("pending"));
// $dao->delete(2);
