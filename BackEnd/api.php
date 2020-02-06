<?php

header('Content-type: application/json');

$items = [];
$items[] = (object) [ "name" => "item1", "price" => "6422" ];
$items[] = (object) [ "name" => "item2", "price" => "5422" ];
$items[] = (object) [ "name" => "item3", "price" => "4422" ];
$items[] = (object) [ "name" => "item4", "price" => "3422" ];
$items[] = (object) [ "name" => "item5", "price" => "2422" ];
$items[] = (object) [ "name" => "item6", "price" => "1422" ];

$ITEMS_JSON = json_encode($items);

header('Content-length: ' . strlen($ITEMS_JSON));

echo $ITEMS_JSON;

?>