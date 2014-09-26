<?php
/**
 * @package     Joomla.Administrator
 * @subpackage  Templates.protostar
 *
 * @copyright   Copyright (C) 2005 - 2013 Open Source Matters, Inc. All rights reserved.
 * @license     GNU General Public License version 2 or later; see LICENSE.txt
 */

defined('_JEXEC') or die;
jimport( 'joomla.application.module.helper' );

$app = JFactory::getApplication();
$doc = JFactory::getDocument();
$this->language = $doc->language;
$renderer = $doc->loadRenderer('module');

$itemid   = $app->input->getCmd('Itemid', '');

?>
<!DOCTYPE html>
<html lang="<?php echo $this->language; ?>" >
<head>
	<title><?php echo $this->title; ?> <?php echo $this->error->getMessage();?></title>
	<meta name="viewport" content="width=device-width, initial-scale=1.0" /> 
    <link rel="stylesheet" href="<?php echo $this->baseurl ?>/templates/<?php echo $this->template; ?>/css/main.css" type="text/css" />

</head>
<body class="<?php echo ($itemid ? ' bgid-' . $itemid : '')?>">
        <div class="header-top">
            <div class="inner">
            <?php
            
                $moduleLang = JModuleHelper::getModule('mod_custom','Languajes');
                echo $renderer->render($moduleLang);

               /* $moduleLogin = JModuleHelper::getModule('mod_custom','Login Btn');
                echo $renderer->render($moduleLogin);

                $moduleFormLogin = JModuleHelper::getModule('Login','Login');
                echo $renderer->render($moduleFormLogin);*/


                   
             ?>
             
            </div>  
        </div>
        <header>
            <div class="inner">
                
                <a href="<?php echo $this->baseurl ?>" class="logo"><img src="<?php echo $this->baseurl ?>/templates/<?php echo $this->template; ?>/img/logo.png" alt="Pura vida Teaching" /></a>
                <div id="btn_nav"><i class="icon-menu"></i></div>
                <nav class="menu">
                    <?php if (JModuleHelper::getModule('menu')) : ?>
                        <?php
                                        $mt = JModuleHelper::getModule('menu');
                                        echo JModuleHelper::renderModule($mt);
                                    ?>
                        <?php endif; ?>
                </nav>

            </div>
        </header>
        
        <section class="main inner">
                <div class="text404">
                        <h1 class="page-header"><?php echo JText::_('JERROR_LAYOUT_PAGE_NOT_FOUND'); ?></h1>
                            <div class="well">
                            <div class="row-fluid">
                                <div class="span6">
                                    <p><strong><?php echo JText::_('JERROR_LAYOUT_ERROR_HAS_OCCURRED_WHILE_PROCESSING_YOUR_REQUEST'); ?></strong></p>
                                    <p><?php echo JText::_('JERROR_LAYOUT_NOT_ABLE_TO_VISIT'); ?></p>
                                    <ul>
                                        <li><?php echo JText::_('JERROR_LAYOUT_AN_OUT_OF_DATE_BOOKMARK_FAVOURITE'); ?></li>
                                        <li><?php echo JText::_('JERROR_LAYOUT_MIS_TYPED_ADDRESS'); ?></li>
                                        <li><?php echo JText::_('JERROR_LAYOUT_SEARCH_ENGINE_OUT_OF_DATE_LISTING'); ?></li>
                                        <li><?php echo JText::_('JERROR_LAYOUT_YOU_HAVE_NO_ACCESS_TO_THIS_PAGE'); ?></li>
                                    </ul>
                                </div>
                                <div class="span6">
                                    <?php if (JModuleHelper::getModule('search')) : ?>
                                        <p><strong><?php echo JText::_('JERROR_LAYOUT_SEARCH'); ?></strong></p>
                                        <p><?php echo JText::_('JERROR_LAYOUT_SEARCH_PAGE'); ?></p>
                                        <?php
                                            $module = JModuleHelper::getModule('search');
                                            echo JModuleHelper::renderModule($module);
                                        ?>
                                    <?php endif; ?>
                                    <p><?php echo JText::_('JERROR_LAYOUT_GO_TO_THE_HOME_PAGE'); ?></p>
                                    <p><a href="<?php echo $this->baseurl; ?>/index.php" class="btn btn-red"><i class="icon-home"></i> <?php echo JText::_('JERROR_LAYOUT_HOME_PAGE'); ?></a></p>
                                </div>
                            </div>
                            <hr />
                            <p><?php echo JText::_('JERROR_LAYOUT_PLEASE_CONTACT_THE_SYSTEM_ADMINISTRATOR'); ?></p>
                            <blockquote>
                                <span class="label label-inverse"><?php echo $this->error->getCode(); ?></span> <?php echo $this->error->getMessage();?>
                            </blockquote>
                        </div>

                </div>
            
        </section>
        <footer>
            <em class="tear"></em>
            <div class="inner" style="text-align: center;">
               
                <div class="column column-logo">
                     <a href="#"><img src="<?php echo $this->baseurl ?>/templates/<?php echo $this->template; ?>/img/logo.png" alt="Pura vida Teaching"/></a>
                     <div class="redes">
                        <a href="#"><i class="icon icon-facebook"></i></a>
                        <a href="#"><i class="icon icon-twitter"></i></a>
                        <a href="#"><i class="icon icon-googleplus"></i></a>
                    </div>
                </div>
            </div>
        </footer>
        <script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
        <script>window.jQuery || document.write('<script src="<?php echo $this->baseurl ?>/templates/<?php echo $this->template; ?>/js/vendor/jquery-1.11.0.min.js"><\/script>')</script>
        
        <script src="<?php echo $this->baseurl ?>/templates/<?php echo $this->template; ?>/js/main.js"></script>

    </body>

</html>
