<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // collect value of input field
    $data['name'] = $_POST['name'];
    $data['contact'] = $_POST['contact'];
    echo json_encode($data);
}
 
?>