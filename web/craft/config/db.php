<?php

/**
 * Database Configuration
 *
 * All of your system's database configuration settings go in here.
 * You can see a list of the default settings in craft/app/etc/config/defaults/db.php
 */

return array(
  	'*' => array(
  		'server' => 'localhost',
  // 	'database' => '',
  // 	'user' => '',
  // 	'password' => '}ew#(3gv',
  		'tablePrefix' => 'craft',
  	),
  'dev' => array(
  	'database' => 'ryanbott',
  	'user' => 'root',
  	'password' => '',
  ),
);
