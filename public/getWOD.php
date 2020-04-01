<?php

/**
 * @author Michael Pierce <mjpierce@techharbor.com>
 * @link https://www.techharbor.com
 * @version $Id$
 */

/*
 * Pull in DB Config File for Security
 */

require_once("dbconfig.php");

header("Access-Control-Allow-Origin: *");

$json = file_get_contents('php://input');
$json_array = json_decode($json, true);

$isConn = true;  //results of connection test
$isPrepared = true;   //results of prepare test
$wodArr = array();
$wodDict = '';

$mysqli = new mysqli($mpDBserver, $mpDBuser, $mpDBpassword, $mpDBname);
if ($mysqli->connect_errno) {
    $isConn = false;
    echo "WTF";
}

if ($isConn) {
    $query = "SELECT `word`,`wordDefinition`,`date_added` FROM wordofday ORDER BY RAND() LIMIT 1;";
    if ($result = $mysqli->query($query)) {
        while ($row = $result->fetch_assoc()) {
            array_push($wodArr, $row);
            $wodDict = $row;
        }
        /* free result set */
        $result->close();
    }
} else {
    echo "WTF";
}

$output = json_encode($wodDict, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES | JSON_NUMERIC_CHECK);
if (!$output) {
    echo json_last_error_msg();
}

echo $output;