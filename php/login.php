<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: GET");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
error_reporting(E_ERROR);
include_once("./database.php");
$db_host = 'localhost';
    $db_name = 'app-goat';
    $db_username = 'root';
    $db_password = '';
$mysqli = $con = mysqli_connect($db_host, $db_username, $db_password, $db_name);
    $postdata = file_get_contents("php://input");
    $request = json_decode($postdata);
    if(isset($postdata) && !empty($postdata))
    {
        $pwd = mysqli_real_escape_string($mysqli, trim($request->password));
        $email = mysqli_real_escape_string($mysqli, trim($request->username));
        $sql = "SELECT * FROM users WHERE password='$pwd' AND email='$email'  ";
        
        if($result = mysqli_query($mysqli,$sql))
        {   
            $rows = array();
            while($row = mysqli_fetch_assoc($result))
            {
                $rows[] = $row;
            }
            echo json_encode($rows);
        } else
        {
            http_response_code(404);
        }
    }
?>