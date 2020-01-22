<?php
$user = "db13364050-alucard";
$pass = "Turbogolf2";
$host = "wp541.webpack.hosteurope.de"

$dbhandle = mysql_connect($host, $user, $pass)
    or die ("Unable to connect to DB");

    echo "Connecte to db";
?>