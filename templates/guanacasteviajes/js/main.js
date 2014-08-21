(function($){
	$menu = $('.menu'),
	$aside_services = $('.forms-reservations'),
	$btn_budget = $('.btn-budget'),
	$cotizador = $('.cotizador');
	

	 $(".chosen-select").chosen({width:"100%"});

	$menu.find(".parent").hoverIntent({
	    over: function() {
			      $(this).find(">.nav-child").slideDown(200 );
			    },
	    out:  function() {
			      $(this).find(">.nav-child").slideUp(200);
			    },
	    timeout: 200

	   	});

	$btn_budget.on('click',function (e) {
    	
    	if($cotizador.hasClass('open'))
    		$cotizador.removeClass('open')
    	else
    		$cotizador.addClass('open');

		$btn_budget.hide()
    	e.preventDefault();
    });

	$cotizador.on('click','.close', function (e) {
		$cotizador.removeClass('open');
		$btn_budget.show()
	});

	// SCROLL PANEL A COLUMNA
   /* menu_s_scroll = $aside_services.mCustomScrollbar({
        theme:"dark",
        scrollButtons:{
          enable:true
        }

    });*/
	$aside_services.stickyfloat({ duration: 400 });
    $aside_services.on('click','.handle',function (e) {
    	
    	if($aside_services.hasClass('open'))
    		$aside_services.removeClass('open')
    	else
    		$aside_services.addClass('open');


    	e.preventDefault();
    });


    $(".gallery-item").colorbox({rel:'gallery'});
    $(".gallery-item .video").colorbox({
		inline:true,
		href:".inlinevideocontent",
		width: "900px"
	});
  
	

})(jQuery);
