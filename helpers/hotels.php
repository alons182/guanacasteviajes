<?php 
//defined('_JEXEC') or die;
define( '_JEXEC', 1 );
define('JPATH_BASE', dirname(dirname(__FILE__)));
define( 'DS', DIRECTORY_SEPARATOR );

require_once (JPATH_BASE . DS . 'includes' . DS . 'defines.php');
require_once (JPATH_BASE . DS . 'includes' . DS . 'framework.php');

jimport('joomla.mail.helper');


$app = JFactory::getApplication('site');
$app->initialise();

$db = JFactory::getDBO();
$query = $db->getQuery(true);
$query->select('id, title,alias');
$query->from('#__content');
$query->where("(catid=13 or catid=14 or catid=15 ) and state=1");
$query->order("title");

$db->setQuery((string)$query);

$menus = $db->loadObjectList();

echo json_encode($menus);

/*foreach($menus as $menu)
{
	echo  $menu->id;
	echo  $menu->title;
}**/



		


	
	
	


?>