(function($){
	$menu = $('.menu'),
	$aside_services = $('.forms-reservations'),
	$btn_budget = $('.btn-budget'),
	$cotizador = $('.cotizador'),
	detailsTours = $('.details'),
	dd =  detailsTours.find('dd'),
	btn_book = $('.btn-book');
	
	
	 if(localStorage.getItem('form_reservation_option'))
           {
                if($aside_services.hasClass('open'))
               		$aside_services.removeClass('open shake')
           } 

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

    btn_book.on('click',function (e) {
    	
    	if($aside_services.hasClass('open'))
    		$aside_services.addClass('shake')
    	else
    		$aside_services.addClass('open shake');

    	setTimeout(function(){
    		$aside_services.removeClass('shake')	
    	}, 3000);

    	e.preventDefault();
    });

	$cotizador.on('click','.close', function (e) {
		$cotizador.removeClass('open');
		$btn_budget.show()
	});

	dd.addClass('hidden');

	detailsTours.on('click','dt', function (e) {
		$(this)
			.next()
				.slideDown(200)
				.siblings('dd')
					.slideUp(200);
		
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
    	{
    		$aside_services.removeClass('open shake')
    		if(! localStorage.getItem('form_reservation_option'))
    			localStorage.setItem('form_reservation_option', 'closed');
    	}
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
