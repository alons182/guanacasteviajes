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
$doc->addStyleSheet('templates/'.$this->template.'/css/bundle.css');
/*$doc->addStyleSheet('templates/'.$this->template.'/css/main.css');
$doc->addStyleSheet('templates/'.$this->template.'/css/chosen.min.css');
$doc->addStyleSheet('templates/'.$this->template.'/css/colorbox.css');
$doc->addStyleSheet('templates/'.$this->template.'/css/animate.css');
$doc->addStyleSheet('templates/'.$this->template.'/css/picker.css');
$doc->addStyleSheet('templates/'.$this->template.'/css/picker.date.css');*/
?>
<!DOCTYPE html>
<html lang="<?php echo $this->language; ?>" >
<head>
	<meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="google-site-verification" content="0WKJexcAYvBAbJ_3yC2PFLDKDunq6PsyMuKaE7K1gbs" /> 
    <jdoc:include type="head" />
    <link href='http://fonts.googleapis.com/css?family=Roboto+Slab:400,300,700' rel='stylesheet' type='text/css'>
    <script src="<?php echo $this->baseurl ?>/templates/<?php echo $this->template; ?>/assets/js/vendor/modernizr-2.6.2.min.js"></script>
     
</head>


 <body class="<?php echo ($itemid ? ' bgid-' . $itemid : '')?>" data-form="<?php echo ($itemid ? $itemid : '')?>">

        <header>
            <section class="up-box">
                <div class="inner">
                    <jdoc:include type="modules" name="up-box" style="none" />
                </div>
                <em class="border-colors"></em>
            </section>
            <section class="down-box">
                <div class="inner">
                    <div id="logo"><a href="<?php echo $this->baseurl ?>"><img src="<?php echo $this->baseurl ?>/templates/<?php echo $this->template; ?>/img/logo.png" alt="Guanacaste Viajes"></a></div>
                    <nav id="menu">
                        <jdoc:include type="modules" name="menu" style="none" />
                    </nav>
                    <a href="#" class="btn-menu"><i class="icon-menu"></i></a>

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
                <div class="copyright"><p>Guanacaste viajes © 2015</p><p class="avotz">Desarrollado por <a href="http://avotz.com" target="_blank"><i class="icon-avotz"></i></a></p></div>
                <div class="phone-numbers">
                <p><strong>USA Phone Number:</strong> +1-404-963-9097 </p><p><strong>Costa Rica:</strong> +011-506-2697-1818 | +011-506-8704-3690</p><br />
                <div id="TA_certificateOfExcellence501" class="TA_certificateOfExcellence"><ul id="IpwE3XUB1lOP" class="TA_links jM54Pmu8W"><li id="WpGhLhOy4" class="udUMqg"><a target="_blank" href="http://www.tripadvisor.com/Attraction_Review-g309240-d2102243-Reviews-Guanacaste_Viajes_Tours-Liberia_Province_of_Guanacaste.html"><img src="http://www.tripadvisor.com/img/cdsi/img2/awards/CoE2015_WidgetAsset-14348-2.png" alt="TripAdvisor" class="widCOEImg" id="CDSWIDCOELOGO"/></a></li></ul></div><script src="http://www.jscache.com/wejs?wtype=certificateOfExcellence&uniq=501&locationId=2102243&lang=en_US&year=2015&display_version=2"></script>    
                <span id="siteseal"><script type="text/javascript" src="https://seal.starfieldtech.com/getSeal?sealID=mq6QnWtPXw00suNUVWLlYvccgxIy24zeNuwFeLjlIohOjHUEuppZUj"></script></span>
                </div>
                <div class="redes"><a href="https://www.facebook.com/GuanacasteViaje" target="_blank">Facebook</a> • <a href="https://twitter.com/guanacasteviaje" target="_blank">Twitter</a></div>
                
            </div>
            <em class="border-colors"></em>
        </footer>
        <aside class="forms-reservations animated">
            <jdoc:include type="modules" name="forms-reservations" style="none" />
           
        </aside>
        
        
        <!--<script src="<?php echo $this->baseurl ?>/templates/<?php echo $this->template; ?>/js/vendor/jquery-1.10.2.min.js"></script>-->
        <!--<script src="<?php echo $this->baseurl ?>/templates/<?php echo $this->template; ?>/js/vendor/jquery.cycle2.min.js"></script>
        <script src="<?php echo $this->baseurl ?>/templates/<?php echo $this->template; ?>/js/vendor/jquery.hoverIntent.minified.js"></script>
        <script src="<?php echo $this->baseurl ?>/templates/<?php echo $this->template; ?>/js/vendor/jquery.mCustomScrollbar.min.js"></script>
        <script src="<?php echo $this->baseurl ?>/templates/<?php echo $this->template; ?>/js/vendor/stickyfloat.min.js"></script>
        <script src="<?php echo $this->baseurl ?>/templates/<?php echo $this->template; ?>/js/vendor/chosen.jquery.min.js"></script>
        <script src="<?php echo $this->baseurl ?>/templates/<?php echo $this->template; ?>/js/vendor/jquery.validate.min.js"></script>
        <script src="<?php echo $this->baseurl ?>/templates/<?php echo $this->template; ?>/js/vendor/jquery.colorbox-min.js"></script>
        <script src="<?php echo $this->baseurl ?>/templates/<?php echo $this->template; ?>/js/vendor/jquery.carouFredSel-6.2.0-packed.js"></script>
        <script src="<?php echo $this->baseurl ?>/templates/<?php echo $this->template; ?>/js/vendor/picker.js"></script>
        <script src="<?php echo $this->baseurl ?>/templates/<?php echo $this->template; ?>/js/vendor/picker.date.js"></script>-->
        
      
        <!--<script src="<?php echo $this->baseurl ?>/templates/<?php echo $this->template; ?>/js/cotizador.js"></script>-->
        <script src="<?php echo $this->baseurl ?>/templates/<?php echo $this->template; ?>/js/bundle.js"></script>

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
