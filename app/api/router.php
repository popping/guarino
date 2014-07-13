<?php
// router.php

if (preg_match('/\.(?:png|jpg|jpeg|gif)$/', $_SERVER["REQUEST_URI"])) {
    return false;
} else {
	echo $_SERVER["REQUEST_URI"];

	if(preg_match('/upload/', $_SERVER["REQUEST_URI"])) {
    	include __DIR__ . '/upload.php';
	} else {
		include __DIR__ . '/index.php';
	}
}
