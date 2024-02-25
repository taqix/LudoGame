<?php
    require 'vendor/autoload.php'; 
    use MongoDB\Driver\BulkWrite;
    use MongoDB\Driver\Manager;
    use MongoDB\Driver\Query;

    $client = new Manager("mongodb://mo39083_chinczyk:Taqilive56@136.243.156.104:27017/?authSource=mo39083_chinczyk&readPreference=primary&ssl=false&directConnection=true");
    $dbname = "mo39083_chinczyk";
    $collectionName="gry";
//     $bulk = new BulkWrite();
// $document = ['_id' => new MongoDB\BSON\ObjectID, 'name' => 'John Doe', 'age' => 30];
// $bulk->insert($document);

// $client->executeBulkWrite('mo39083_chinczyk.gry', $bulk);
    $array = array(0=>array());
    function addPlayerToGame($id,$games,$client){
      $query = new Query(['field_name' => $id]);
      $cursor = $client->executeQuery("mo39083_chinczyk.gry", $query);
      $existingDocument = current($cursor->toArray());
      if ($existingDocument) {
        echo 'Element już istnieje: ';
        var_dump($existingDocument);

    } else {
        echo 'Element nie istnieje, dodaj nowy element';
        $bulk = new BulkWrite();
        $document = ['field_name' => $id, 'other_field' => 'test'];
        $bulk->insert($document);
    
        $client->executeBulkWrite("mo39083_chinczyk.gry", $bulk);
    }
      foreach($games as $key => $idPlayer){
        if(count($idPlayer) == 4){
          array_push($games,array());
          continue;
        }
        else{
          array_push($idPlayer,$id);
          $games[$key] = $idPlayer;
          break;
        }
      }
      return $games;
    }
    if (isset($_GET["sid"]) && $_GET["sid"]!="")
      session_id($_GET["sid"]);
    else{
      session_start();
      $array = addPlayerToGame(session_id(),$array,$client);
    }
    header("Access-Control-Allow-Origin: http://localhost:4200");
    header("Content-type: application/json");(
    $res = array("games"=>$array,"id"=>session_id()));
    echo json_encode($res);
    session_destroy();