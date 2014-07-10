<?php

require_once __DIR__.'/vendor/autoload.php'; 

$app = new Silex\Application(); 

$app['debug'] = true;

$app->get('/', function() use($app) {
    return '<h1>Estas en Silex</h1>';
});

$app->match('/upload', function() { 
    // $tempDir = __DIR__ . DIRECTORY_SEPARATOR . 'temp';

    // if(!file_exists($tempDir)) {
    //     mkdir($tempDir);
    // }

    // if($_SERVER['REQUEST_METHOD'] === 'GET') {
    //     $chunkDir   = $tempDir . DIRECTORY_SEPARATOR . $_GET['flowIdentifier'];
    //     $chunkFile  = $chunkDir.'/chunk.part'.$_GET['flowChunkNumber'];
        
    //     if(file_exists($chunkFile)) {
    //         header("HTTP/1.0 200 Ok");
    //     } else {
    //         header("HTTP/1.0 404 Not Found");
    //     }
    // }

    // // Just imitate that the file was uploaded and stored.
    // //sleep(2);
    // return json_encode([
    //     'success'           => true,
    //     'files'             => $_FILES,
    //     'get'               => $_GET,
    //     'post'              => $_POST,
    //     'flowTotalSize'     => isset($_FILES['file']) ? $_FILES['file']['size'] : $_GET['flowTotalSize'],
    //     'flowIdentifier'    => isset($_FILES['file']) ? $_FILES['file']['name'] . '-' . $_FILES['file']['size'] : $_GET['flowIdentifier'],
    //     'flowFilename'      => isset($_FILES['file']) ? $_FILES['file']['name'] : $_GET['flowFilename'],
    //     'flowRelativePath'  => isset($_FILES['file']) ? $_FILES['file']['tmp_name'] : $_GET['flowRelativePath']
    // ]);

    if (\Flow\Basic::save('./upload_dir', './temp')) {
        return "Successful";// file saved successfully and can be accessed at './final_file_destination'
    } else {
        return json_encode([
            'success'           => true,
            'files'             => $_FILES,
            'get'               => $_GET,
            'post'              => $_POST,
            'flowTotalSize'     => isset($_FILES['file']) ? $_FILES['file']['size'] : $_GET['flowTotalSize'],
            'flowIdentifier'    => isset($_FILES['file']) ? $_FILES['file']['name'] . '-' . $_FILES['file']['size'] : $_GET['flowIdentifier'],
            'flowFilename'      => isset($_FILES['file']) ? $_FILES['file']['name'] : $_GET['flowFilename'],
            'flowRelativePath'  => isset($_FILES['file']) ? $_FILES['file']['tmp_name'] : $_GET['flowRelativePath']
        ]);
    }
})->method('GET|POST');; 

$app->run(); 