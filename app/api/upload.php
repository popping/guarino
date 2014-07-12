<?php 

require_once __DIR__.'/vendor/autoload.php'; 

use Flow\Config;
use Flow\Request;
use Flow\File;

$config     = new Config(array(
    'tempDir' => './temp/tmp'
));
$request    = new Request();
$file       = new File($config, $request);

if($_SERVER['REQUEST_METHOD'] === 'GET') {
    if ($file->checkChunk()) {
        header("HTTP/1.1 200 Ok");
    } else {
        header("HTTP/1.1 404 Not Found");
        return false;
    }
} else {
    if ($file->validateChunk()) {
        $file->saveChunk();
    } else {
        // error, invalid chunk upload request, retry
        header("HTTP/1.1 400 Bad Request");
        return false;
    }
}

if($file->validateFile() && $file->save('./temp/'.$request->getFilename())) {
    echo(json_encode([
        'success' => true,
        'files'   => $_FILES,
        'get'     => $_GET,
        'post'    => $_POST
    ]));
} else {
    echo(json_encode([
        'success' => false,
        'files'   => $_FILES,
        'get'     => $_GET,
        'post'    => $_POST
    ]));
}
