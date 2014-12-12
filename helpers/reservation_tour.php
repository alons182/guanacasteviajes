<?php 
//defined('_JEXEC') or die;
define( '_JEXEC', 1 );
define('JPATH_BASE', dirname(dirname(__FILE__)));
define( 'DS', DIRECTORY_SEPARATOR );

require_once (JPATH_BASE . DS . 'includes' . DS . 'defines.php');
require_once (JPATH_BASE . DS . 'includes' . DS . 'framework.php');

jimport('joomla.mail.helper');



//notificacion por email de una nueva reservacion o comentario de contacto

$data =  $_POST;


$asunto = "Reservation in Guanacaste Viajes"; 



	$cuerpo = '

	<h1>Datos de Reservacion de Tour:</h1>

	<strong>Destination:</strong> '.json_encode($data['tour-destination']).'<br />
	<strong>Type of tour:</strong> '.$data['tour-type'].'<br />
	<strong>Hotel for Pick up:</strong> '.$data['tour-hotelpickup'].'<br />
	<strong>Date:</strong> '.$data['tour-pdate'].'<br />
	<strong>Full Name:</strong> '.$data['tour-fname'].'<br />
	<strong>Email:</strong> '.  $data['tour-email'].'<br />
	<strong>Phone:</strong> '.$data['tour-phone'].'<br />
	<strong>Adults: </strong>'.  $data['tour-persons'].'<br />
	<strong>Childrens:</strong> '.  $data['tour-children'];
	
	$emailuser = $data['tour-email'];


/*$config = JFactory::getConfig();
$emailuser= array( 
			$config->getValue( 'config.mailfrom' ),
			$config->getValue( 'config.fromname' )
			 );*/

$destinatario = 'manuel@airporttransfercostarica.com';//'alonso@avotz.com'; //$email_yokue;





//verificamos los datos con los métodos de JMailHelper
if(!JMailHelper::isEmailAddress($destinatario))return false;
if(!JMailHelper::cleanAddress($destinatario)) return false;
//limpiamos el asunto de posible código malicioso 
$subject = JMailHelper::cleanSubject($asunto); 
//limpiamos el mensaje (cuerpo del email) de posible código malicioso

$body = JMailHelper::cleanText($cuerpo); 



$mailer = JFactory::getMailer(); 
$mailer->isHtml(true);

$mailer->setSender($emailuser); 
$mailer->addRecipient($destinatario); 
$mailer->setSubject($asunto); 
$mailer->setBody($body); 
if($mailer->send()) 
	echo 'ok';
else
  echo 'error';


		


	
	
	


?>