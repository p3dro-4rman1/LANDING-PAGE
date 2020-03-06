<?php

$conn = new PDO("mysql:dbname=LANDINGPAGE;host=localhost",
"root","root",
/*Insere formatação de caracteres*/ array(PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8"))
or die ("Erro na conexão");

?>