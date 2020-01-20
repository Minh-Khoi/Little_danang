<?php
class Session
{
    private $session_id, $type_of_visa, $date_of_session, $date_of_arrivals, $airport, $email, $img_path, $payment_feedback,
        $is_done, $admin_id;
    // CONSTRUCTOR
    public function __construct(
        $session_id,
        $type_of_visa,
        $date_of_session,
        $date_of_arrivals,
        $airport,
        $email,
        $img_path,
        $payment_feedback
    ) {
        $this->session_id = $session_id;
        $this->type_of_visa = $type_of_visa;
        $this->date_of_session = $date_of_session;
        $this->date_of_arrivals = $date_of_arrivals;
        $this->airport = $airport;
        $this->email = $email;
        $this->img_path = $img_path;
        $this->payment_feedback = $payment_feedback;
    }

    // SET METHODS
    public function set_session_id($session_id)
    {
        $this->session_id = $session_id;
    }
    public function set_type_of_visa($type_of_visa)
    {
        $this->type_of_visa = $type_of_visa;
    }
    public function set_date_of_session($date_of_session)
    {
        $this->date_of_session = $date_of_session;
    }
    public function set_date_of_arrivals($date_of_arrivals)
    {
        $this->date_of_arrivals = $date_of_arrivals;
    }
    public function set_airport($airport)
    {
        $this->airport = $airport;
    }
    public function set_email($email)
    {
        $this->email = $email;
    }
    public function set_img_path($img_path)
    {
        $this->img_path = $img_path;
    }
    public function set_payment_feedback($payment_feedback)
    {
        $this->payment_feedback = $payment_feedback;
    }
    public function set_is_done($is_done)
    {
        $this->is_done = $is_done;
    }
    public function set_admin_id($admin_id)
    {
        $this->admin_id = $admin_id;
    }

    // GET METHODS
    public function get_session_id()
    {
        return $this->session_id;
    }
    public function get_type_of_visa()
    {
        return $this->type_of_visa;
    }
    public function get_date_of_session()
    {
        return $this->date_of_session;
    }
    public function get_date_of_arrivals()
    {
        return $this->date_of_arrivals;
    }
    public function get_airport()
    {
        return $this->airport;
    }
    public function get_email()
    {
        return $this->email;
    }
    public function get_img_path()
    {
        return $this->img_path;
    }
    public function get_payment_feedback()
    {
        return $this->payment_feedback;
    }
    public function get_is_done()
    {
        return $this->is_done;
    }
    public function get_admin_id()
    {
        return $this->admin_id;
    }

    //** SET WITH AN ARRAY */
    static function set(array $array)
    {
        $sess = new Session(0, 0, 0, 0, 0, 0, 0, 0);

        $sess->session_id = $array['session_id'];
        $sess->type_of_visa = $array['type_of_visa'];
        $sess->date_of_session = $array['date_of_session'];
        $sess->date_of_arrivals = $array['date_of_arrivals'];
        $sess->airport = $array['airport'];
        $sess->email = $array['email'];
        $sess->img_path = $array['img_path'];
        $sess->payment_feedback = $array['payment_feedback'];

        return $sess;
    }
}
// //$session_id, $type_of_visa, $date_of_session, $date_of_arrivals, $airport, $email, $img_path, $payment_feedback,

// $ses = new Session(1, "alkdjls", "654645", "2012-02-03", "noibai", "sdjfdls@lsfjl", "5465/548/4", "sure");
// print_r($ses);
// $array = array(
//     "session_id" => 3, "type_of_visa" => "sdf", "date_of_session" => "pdfsp", "date_of_arrivals" => "sdfs",
//     "airport" => "sdfsfa", "email" => "sdfsvfdbfg", "img_path" => "werrtytj", "payment_feedback" => "not"
// );
// $ses = Session::set($array);
// print_r($ses);
