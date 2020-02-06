<?php

class Items {
    private $db = null;
    private $table = 'items';
    
    function __construct($db) {
        $this->db = $db;
    }

    public function getItems() {
        $items = [];

        $query = "SELECT * FROM $this->table";
        $result = $this->db->query($query);
        while($row = $result->fetch_assoc()) {
            $items[] = (object) $row;
        }
    
        return $items;
    }

    public function getItem($id = 0) {
        $item = (object)[];

        $stmt = $this->db->prepare("SELECT * FROM $this->table WHERE id = ?");
        $stmt->bind_param("i", $id);
        $stmt->execute();
        $result = $stmt->get_result();
        if($result->num_rows === 1) {
            $item = (object)$result->fetch_assoc();
        }
    
        return $item;
    }

    public function insert($newItem) {
        $stmt = $this->db->prepare("INSERT INTO `$this->table` (`name`, `price`) VALUE (?, ?)");
        $stmt->bind_param("sd", $newItem->name, $newItem->price);
        if($stmt->execute()) {
            $result = $this->db->query("SELECT * FROM `$this->table` WHERE `$this->table`.`id` = $stmt->insert_id LIMIT 1");
            $row = $result->fetch_assoc();
            $item = (object) $row;

            return $item;
        } else {
            $_error = (object) ['property' => 'Here we go'];

            return $_error;
        }
    }

    public function update($updateItem) {
        $stmt = $this->db->prepare("UPDATE `$this->table` SET `name` = ?, `price` = ? WHERE `id` = ? LIMIT 1");
        $stmt->bind_param("sdi", $updateItem->name, $updateItem->price, $updateItem->id);
        if($stmt->execute()) {
            $result = $this->db->query("SELECT * FROM `$this->table` WHERE `$this->table`.`id` = $updateItem->id LIMIT 1");
            $row = $result->fetch_assoc();
            $item = (object) $row;
            
            return $item;
        } else {
            $_error = (object) ['property' => 'Here we go'];
            
            return $_error;
        }    
    }

    public function delete($id) {
        $stmt = $this->db->prepare("DELETE FROM `$this->table` WHERE `id` = ? LIMIT 1");
        $stmt->bind_param("i", $id);
        if($stmt->execute()) {
            $item = (object) [];
            
            return $item;
        } else {
            $_error = (object) ['property' => 'Here we go'];
            
            return $_error;
        }    
    }

}