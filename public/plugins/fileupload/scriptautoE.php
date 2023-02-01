<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
$id=$_GET["id"];
$url=$_SERVER["SCRIPT_URL"];
    exec("chmod -R 755 /home/webid/public_html/uploaded");
    header("Location: $url/includes/packages/fileupload/upload.php?id=$id");