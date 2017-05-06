<?php

/**
 * General Configuration
 *
 * All of your system's general configuration settings go in here.
 * You can see a list of the default settings in craft/app/etc/config/defaults/general.php
 */

 define('URI_SCHEME',  ( isset($_SERVER['HTTPS'] ) ) ? "https://" : "http://" );
 define('SITE_URL',    URI_SCHEME . $_SERVER['SERVER_NAME'] . '/');
 define('BASEPATH',       realpath(CRAFT_BASE_PATH . '/../') . '/');

return array(

  '*' => array(
        'environmentVariables' => array(
        'siteUrl'  => SITE_URL,
        'basePath' => BASEPATH
        ),
        'omitScriptNameInUrl' => true

  ),
  'dev' => array(
    'devMode' => true,
  )

);
