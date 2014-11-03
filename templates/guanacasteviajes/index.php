<?php
/**
 * @package     Joomla.Administrator
 * @subpackage  Templates.Puravida
 *
 * @copyright   Copyright (C) 2005 - 2013 Open Source Matters, Inc. All rights reserved.
 * @license     GNU General Public License version 2 or later; see LICENSE.txt
 */

defined('_JEXEC') or die;



$app = JFactory::getApplication();
$doc = JFactory::getDocument();
$this->language = $doc->language;


$itemid   = $app->input->getCmd('Itemid', '');

// Add JavaScript Frameworks
//JHtml::_('bootstrap.framework');

// Add Stylesheets
//$doc->addStyleSheet('templates/'.$this->template.'/css/normalize.min.css');
$doc->addStyleSheet('templates/'.$this->template.'/css/main.css');
$doc->addStyleSheet('templates/'.$this->template.'/css/chosen.min.css');
$doc->addStyleSheet('templates/'.$this->template.'/css/colorbox.css');
$doc->addStyleSheet('templates/'.$this->template.'/css/animate.css');
$doc->addStyleSheet('templates/'.$this->template.'/css/picker.css');
$doc->addStyleSheet('templates/'.$this->template.'/css/picker.date.css');
?>
<!DOCTYPE html>
<html lang="<?php echo $this->language; ?>" >
<head>
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<jdoc:include type="head" />
    <link href='http://fonts.googleapis.com/css?family=Roboto+Slab:400,300,700' rel='stylesheet' type='text/css'>
	<script src="<?php echo $this->baseurl ?>/templates/<?php echo $this->template; ?>/js/vendor/modernizr-2.6.2.min.js"></script>
     
     
</head>


 <body class="<?php echo ($itemid ? ' bgid-' . $itemid : '')?>">

        <header>
            <section class="up-box test3">
                <div class="inner">
                    <jdoc:include type="modules" name="up-box" style="none" />
                </div>
                <em class="border-colors"></em>
            </section>
            <section class="down-box">
                <div class="inner">
                    <div id="logo"><a href="<?php echo $this->baseurl ?>">LOGO</a></div>
                    <nav id="menu">
                        <jdoc:include type="modules" name="menu" style="none" />
                    </nav>

                    <?php if ($this->countModules('cotizador')) : ?>
                        <jdoc:include type="modules" name="btn_cotizador" style="none" />
                        <div class="cotizador">
                            <jdoc:include type="modules" name="cotizador" style="none" />
                        </div>
                    <?php endif; ?>
                </div>
            </section>
        </header>
         <?php if ($this->countModules('banner')) : ?>
             <section id="slider">
                <jdoc:include type="modules" name="banner" style="none" />
                <em class="border-colors"></em>
            </section>

        <?php endif; ?>
        
        <section class="top-info">
             
             <div class="inner">
            
                <div class="row">
                    <?php if ($this->countModules('info-main')) : ?>
                        <jdoc:include type="modules" name="info-main" style="none" />
                    <?php endif; ?>
                </div>
            
            </div>
            
        </section>
        <section class="main">
            <em class="border-colors"></em>
             <div class="inner">
                 <jdoc:include type="message" />
                 <jdoc:include type="component" />
            </div>
        </section>
        
        <section class="services-box">
            <div class="inner">
                <div class="row">
                     <?php if ($this->countModules('services')) : ?>
                        
                            
                            <jdoc:include type="modules" name="services" style="none" />
                           
                       
                     <?php endif; ?>
                </div>
            </div>
        </section>
        <footer>
            <div class="inner">
                <div class="copyright"><p>Guanacaste viajes © 2013</p></div>
                <div class="redes"><a href="#">Facebook</a> • <a href="#">Twitter</a></div>
            </div>
            <em class="border-colors"></em>
        </footer>
        <aside class="forms-reservations open animated">
            <jdoc:include type="modules" name="forms-reservations" style="none" />
           
        </aside>
        
        
        <!--<script src="<?php echo $this->baseurl ?>/templates/<?php echo $this->template; ?>/js/vendor/jquery-1.10.2.min.js"></script>-->
        <script src="<?php echo $this->baseurl ?>/templates/<?php echo $this->template; ?>/js/vendor/jquery.cycle2.min.js"></script>
        <script src="<?php echo $this->baseurl ?>/templates/<?php echo $this->template; ?>/js/vendor/jquery.hoverIntent.minified.js"></script>
        <script src="<?php echo $this->baseurl ?>/templates/<?php echo $this->template; ?>/js/vendor/jquery.mCustomScrollbar.min.js"></script>
        <script src="<?php echo $this->baseurl ?>/templates/<?php echo $this->template; ?>/js/vendor/stickyfloat.min.js"></script>
        <script src="<?php echo $this->baseurl ?>/templates/<?php echo $this->template; ?>/js/vendor/chosen.jquery.min.js"></script>
        <script src="<?php echo $this->baseurl ?>/templates/<?php echo $this->template; ?>/js/vendor/jquery.validate.min.js"></script>
        <script src="<?php echo $this->baseurl ?>/templates/<?php echo $this->template; ?>/js/vendor/jquery.colorbox-min.js"></script>
        <script src="<?php echo $this->baseurl ?>/templates/<?php echo $this->template; ?>/js/vendor/jquery.carouFredSel-6.2.0-packed.js"></script>
        <script src="<?php echo $this->baseurl ?>/templates/<?php echo $this->template; ?>/js/vendor/picker.js"></script>
        <script src="<?php echo $this->baseurl ?>/templates/<?php echo $this->template; ?>/js/vendor/picker.date.js"></script>
        
      
        <script src="<?php echo $this->baseurl ?>/templates/<?php echo $this->template; ?>/js/cotizador.js"></script>
        <script src="<?php echo $this->baseurl ?>/templates/<?php echo $this->template; ?>/js/main.js"></script>

        <!-- Google Analytics: change UA-XXXXX-X to be your site's ID. -->
       <!-- <script>
            (function(b,o,i,l,e,r){b.GoogleAnalyticsObject=l;b[l]||(b[l]=
            function(){(b[l].q=b[l].q||[]).push(arguments)});b[l].l=+new Date;
            e=o.createElement(i);r=o.getElementsByTagName(i)[0];
            e.src='//www.google-analytics.com/analytics.js';
            r.parentNode.insertBefore(e,r)}(window,document,'script','ga'));
            ga('create','UA-XXXXX-X');ga('send','pageview');
        </script>-->


        <jdoc:include type="modules" name="debug" style="none" />
    </body>

</html>
