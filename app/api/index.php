<?php
require_once __DIR__.'/vendor/autoload.php'; 

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Finder\Finder;
use Silex\Provider\SwiftmailerServiceProvider;
use Flow\Config;
use Flow\File;

// Inicializar 
$app = new Silex\Application();

// Configuracion
$app['debug'] = true;
$app->register(new SwiftmailerServiceProvider(), array(
    'swiftmailer.options' => array(
        'host'       => 'mail.arquitecturaguarino.com.ar',
        'port'       => '587',
        'username'   => 'info@arquitecturaguarino.com.ar',
        'password'   => 'arquitectura@guarino',
        'encryption' => null,
        'auth_mode'  => null
    )
));

// Application
// Upload
$app->match('/upload', function() use ($app) { 
    $config     = new Config(array(
        'tempDir' => './temp/tmp'
    ));

    $request    = new Flow\Request();
    $file       = new File($config, $request);

    if($_SERVER['REQUEST_METHOD'] === 'GET') {
        if($file->checkChunk()) {
            header("HTTP/1.1 200 Ok");
        } else {
            header("HTTP/1.1 404 Not Found");
            return ''; 
        }
    } else {
        if($file->validateChunk()) {
            $file->saveChunk();
        } else {
            // error, invalid chunk upload request, retry
            header("HTTP/1.1 400 Bad Request");
            return '';
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

// Galeria
$app->get('/galeria', function() use($app) {
    $finder = new Finder();
    $finder->in('../images/galeria');

    $images = array();

    foreach($finder->files()->name('*.txt') as $file) {
        $texto = $file->getContents();

        $images[] = array(
            'imagen'    => 'images/galeria/' . basename($file->getFilename(), ".txt"),
            'texto'     => $texto
        ); 
    }

    return $app->json($images);
});

// 3D
$app->get('/3d', function() use($app) {
    $finder = new Finder();
    $finder->in('../images/3d');

    $images = array();

    foreach($finder->files()->name('*.txt') as $file) {
        $texto = $file->getContents();

        $images[] = array(
            'imagen'    => 'images/3d/' . basename($file->getFilename(), ".txt"),
            'texto'     => $texto
        ); 
    }

    return $app->json($images);
});

// Reciclado
$app->get('/reciclado', function() use($app) {
    $finder = new Finder();
    $finder->in('../images/reciclado');

    $images = array();

    foreach($finder->files()->name('*.txt') as $file) {
        $texto = $file->getContents();

        $images[] = array(
            'imagen'    => 'images/reciclado/' . basename($file->getFilename(), ".txt"),
            'texto'     => $texto
        ); 
    }

    return $app->json($images);
});

// Procesar Mensaje de Contacto
$app->post('/sendmail', function(Request $request) use($app) {
    $contacto = json_decode($request->getContent());

    $cuerpo = sprintf("Nombre: %s \n\nTelefono: %s \n\nMensaje: \n%s", 
        $contacto->name,
        $contacto->telefono,
        $contacto->message
    );

    $message = \Swift_Message::newInstance();
    $message->setFrom(array($contacto->email));
    $message->setTo(array('info@arquitecturaguarino.com.ar'));
    $message->setSubject('[arquitecturaguarino.com.ar] Contacto');
    $message->setBody($cuerpo);
 
    $app['mailer']->send($message);

    return 'Gracias por su mensaje!';
});

// Ejecutar Aplicacion
$app->run(); 