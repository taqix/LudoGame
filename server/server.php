<?php
    session_start();
    $_SESSION["id"] += 1;
    echo json_encode($_SESSION);