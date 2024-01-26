<?php
    use MongoDB\Client;
    use MongoDB\Driver\ServerApi;
    // $client = new MongoDB\Client("mongodb://mo39083_chinczyk:Taqilive56@136.243.156.104:27017");
    // $client->selectDatabase('chinczyk')->command(['ping' => 1]);
    // echo "Pinged your deployment. You successfully connected to MongoDB!\n";
    // $array = array(0=>array());
    function addPlayerToGame($id,$games){
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
      $array = addPlayerToGame(session_id(),$array);
    }
    header("Access-Control-Allow-Origin: http://localhost:4200");
    header("Content-type: application/json");(
    $res = array("games"=>$array,"id"=>session_id()));
    echo json_encode($res);
    session_destroy();