<?php

class Database {
    private $host = 'localhost';
    private $username = 'root';
    private $password = 'root';
    private $database = 'angularjs';
    private $connect = null;

    function getConnection() {
        if($this->connect != null) {
            return $this->connect;
        }

        $this->connect = mysqli_connect($this->host, $this->username, $this->password, $this->database);

        if($this->connect->connect_errno) {
            echo "Failed to connect to MySQL: " . $this->connect->connect_error;
            return false;
        }

        return $this->connect;
    }
}