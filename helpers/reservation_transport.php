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

	<h1>Datos de Reservacion de Transporte:</h1>

	
	<strong>Service:</strong> '. $data['transport-services'].'<br />
	<strong>Destination:</strong> '.json_encode($data['transport-destination']).'<br />
	<strong>Price:</strong> '. $data['transport-price'].'<br />
	<strong>Pick up:</strong> '.$data['transport-pdate'].'<br />
	<strong>Return Date:</strong> '.$data['transport-rdate'].'<br />
	<strong>Full Name:</strong> '.$data['transport-fname'].'<br />
	<strong>Email:</strong> '.  $data['transport-email'].'<br />
	<strong>Phone:</strong> '.$data['transport-phone'].'<br />
	<strong>Adults: </strong>'.  $data['transport-persons'].'<br />
	<strong>Childrens:</strong> '.  $data['transport-children']. '<br />
	<strong>Flight Number: </strong>'.  $data['transport-flight'].'<br />
	<strong>Airline: </strong>'.  $data['transport-airline'].'<br />
	<strong>Arrival Time: </strong>'.  $data['transport-atime'].'<br />
	<strong>Departure Time: </strong>'.  $data['transport-dtime'].'<br />
	<strong>Notes: </strong>'.  $data['transport-notes'].'<br />';

	$emailuser = $data['transport-email'];


/*$config = JFactory::getConfig();
$emailuser= array( 
			$config->getValue( 'config.mailfrom' ),
			$config->getValue( 'config.fromname' )
			 );*/

$destinatario = 'reservation@airporttransfercostarica.com';//'alonso@avotz.com'; //$email_yokue;





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