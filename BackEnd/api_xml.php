<?php

error_reporting(E_ALL);
ini_set("display_errors", 1);

header('Content-type: application/xml');

$items = [];
$items[] = [ "name" => "item1", "price" => "6422" ];
$items[] = [ "name" => "item2", "price" => "5422" ];
$items[] = [ "name" => "item3", "price" => "4422" ];
$items[] = [ "name" => "item4", "price" => "3422" ];
$items[] = [ "name" => "item5", "price" => "2422" ];
$items[] = [ "name" => "item6", "price" => "1422" ];

// var_dump($items);

$items_xml = new SimpleXMLElement('<items/>');
// array_walk_recursive($items, array($items_xml, 'addChild'));

foreach($items as $key=>$item) {
    $items_xml->addChild('item');
    $items_xml->item[$key]->addAttribute('name', $items[$key]['name']);
    $items_xml->item[$key]->addAttribute('price', $items[$key]['price']);
}

header('Content-length: ' . strlen($items_xml->asXML()));

echo $items_xml->asXML();

?>