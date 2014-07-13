<?php
require_once __DIR__.'/vendor/autoload.php'; 

$app = new Silex\Application();
$app['debug'] = true;

$app->get('/', function() {
	return "<h1>Welcome to silex</h1>";
});

$app->get('/api/prueba', function() {
	return "<h1>prueba</h1>";
});

$app->get('/api/prueba/choto', function() {
	return "<h1>prueba choto</h1>";
});

$app->get('/api/prueba/choto/poronga', function() {
	return "<h1>prueba choto poronga</h1>";
});

$app->run(); 