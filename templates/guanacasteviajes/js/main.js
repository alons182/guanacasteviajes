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


	//gallery carrousel

  $('#slider-gallery').carouFredSel({
		width: '100%',
		align: false,
		items: 3,
		items: {
			width: $('.tours-gallery').width() * 0.15,
			height: 500,
			visible: 1,
			minimum: 1
		},
		scroll: {
			items: 1,
			timeoutDuration : 5000,
			onBefore: function(data) {
 
				//	find current and next slide
				var currentSlide = $('.slide.active', this),
					nextSlide = data.items.visible,
					_width = $('.tours-gallery').width();
 
				//	resize currentslide to small version
				currentSlide.stop().animate({
					width: _width * 0.15
				});		
				currentSlide.removeClass( 'active' );
 
				//	hide current block
				data.items.old.add( data.items.visible ).find( '.slide-block' ).stop().fadeOut();					
 
				//	animate clicked slide to large size
				nextSlide.addClass( 'active' );
				nextSlide.stop().animate({
					width: _width * 0.7
				});						
			},
			onAfter: function(data) {
				//	show active slide block
				data.items.visible.last().find( '.slide-block' ).stop().fadeIn();
			}
		},
		onCreate: function(data){
 
			//	clone images for better sliding and insert them dynamacly in slider
			var newitems = $('.slide',this).clone( true ),
				_width = $('.tours-gallery').width();
 
			$(this).trigger( 'insertItem', [newitems, newitems.length, false] );
 
			//	show images 
			$('.slide', this).fadeIn();
			$('.slide:first-child', this).addClass( 'active' );
			$('.slide', this).width( _width * 0.15 );
 
			//	enlarge first slide
			$('.slide:first-child', this).animate({
				width: _width * 0.7
			});
 
			//	show first title block and hide the rest
			$(this).find( '.slide-block' ).hide();
			$(this).find( '.slide.active .slide-block' ).stop().fadeIn();
		}
	});
 
	//	Handle click events
	$('#slider-gallery').children().click(function() {
		$('#slider-gallery').trigger( 'slideTo', [this] );
	});
 
	//	Enable code below if you want to support browser resizing
	$(window).resize(function(){
 
		var slider = $('#slider-gallery'),
			_width = $('.tours-gallery').width();
 
		//	show images
		slider.find( '.slide' ).width( _width * 0.15 );
 
		//	enlarge first slide
		slider.find( '.slide.active' ).width( _width * 0.7 );
 
		//	update item width config
		slider.trigger( 'configuration', ['items.width', _width * 0.15] );
	});	 
  
	

})(jQuery);
