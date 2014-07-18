<?php
require_once __DIR__.'/vendor/autoload.php'; 

use Flow\Config;
use Flow\Request;
use Flow\File;

$app = new Silex\Application();
$app['debug'] = true;

$app->match('/upload', function() use ($app) { 
    $config     = new Config(array(
        'tempDir' => './temp/tmp'
    ));

    $request    = new Request();
    $file       = new File($config, $request);

    if($_SERVER['REQUEST_METHOD'] === 'GET') {
        if($file->checkChunk()) {
            header("HTTP/1.1 200 Ok");
        } else {
            header("HTTP/1.1 404 Not Found");
            return; 
        }
    } else {
        if($file->validateChunk()) {
            $file->saveChunk();
        } else {
            // error, invalid chunk upload request, retry
            header("HTTP/1.1 400 Bad Request");
            return;
        }
    }

    if($file->validateFile() && $file->save('./temp/'.$request->getFilename())) {
        return $app->json([
            'success' => true,
            'files'   => $_FILES,
            'get'     => $_GET,
            'post'    => $_POST
        ]);
    } else {
        return $app->json([
            'success' => false,
            'files'   => $_FILES,
            'get'     => $_GET,
            'post'    => $_POST
        ]);
    }
})->method('GET|POST');

$app->run(); 