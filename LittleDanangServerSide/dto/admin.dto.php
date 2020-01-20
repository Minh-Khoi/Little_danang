<?php
class Admin
{
    private $admin_id, $fullname, $officer_code, $password;
    /**
     * Class constructor.
     */
    public function __construct($fullname, $officer_code, $password)
    {
        $this->fullname = $fullname;
        $this->officer_code = $officer_code;
        $this->password = $password;
    }

    //** GET METHODS */
    public function get_admin_id()
    {
        return $this->admin_id;
    }
    public function get_fullname()
    {
        return $this->fullname;
    }
    public function get_officer_code()
    {
        return $this->officer_code;
    }
    public function get_password()
    {
        return $this->password;
    }

    //** SET METHODS */
    public function set_admin_id($admin_id)
    {
        $this->admin_id = $admin_id;
    }
    public function set_fullname($fullname)
    {
        $this->fullname = $fullname;
    }
    public function set_officer_code($officer_code)
    {
        $this->officer_code = $officer_code;
    }
    public function set_password($password)
    {
        $this->password = $password;
    }

    //** SET WITH AN ARRAY  ($fullname, $officer_code, $password)*/
    static function set(array $array)
    {
        $ad = new Admin(0, 0, 0);

        $ad->fullname = $array['fullname'];
        $ad->officer_code = $array['officer_code'];
        $ad->password = $array['password'];

        return $ad;
    }
}