<?php
$one=$_POST["place"];
header("Content-type: text/json; charset=utf-8");    
$two =array('dataType'=>1);
echo json_encode($two);
?>