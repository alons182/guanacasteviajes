(function($){
	$menu = $('#menu'),
	$aside_services = $('.forms-reservations'),
	$btn_budget = $('.btn-budget'),
	$cotizador = $('.cotizador'),
	detailsTours = $('.details'),
	linkInterest = $('.link-interest'),
	dd =  detailsTours.find('dd'),
	btn_book = $('.btn-book'),
	tabs = $('.tabs'),
	contentArticles = $('.item-page.page-hotels'),
	reservation_hotel = $('.reservation-hotel'),
	reservation_tour = $('.reservation-tour'),
	reservation_transport = $('.reservation-transport')
	

	$('.btn-carRentals').on('click', function (e) {
	
		localStorage.setItem('carRentals', $(this).data('activitie'));
 		//window.location.href = "/Reservation.html";
		//e.preventDefault();
	});
	verifica_carRentals();
	function verifica_carRentals () {

        if(localStorage.getItem('carRentals'))
            {

               var carRentals = localStorage.getItem('carRentals');

               $(".b2j_contact").find('textarea').text('Rent: ' + carRentals);
                    
                localStorage.removeItem('carRentals');
               
                 
            }
    }

	
           

	$('.btn-menu').on('click', function (e) {
	
		$menu.toggle();

		e.preventDefault();
	});

	
	// verifcar en que menu esta para poner el formulario correspondiente
	check_menu_location_for_form_reservation($('body').data('form'));


	function check_menu_location_for_form_reservation(form_menu_id)
	{
		
		
		reservation_hotel.addClass('hidden');
	    reservation_tour.addClass('hidden');
	    reservation_transport.addClass('hidden');
		
		if(form_menu_id === 124 || form_menu_id === 125 || form_menu_id === 126 || form_menu_id === 127 || form_menu_id === 128 || form_menu_id === 130 || form_menu_id === 131 || form_menu_id === 132 || form_menu_id === 133 || form_menu_id === 134 || form_menu_id === 135 || form_menu_id === 137 || form_menu_id === 138 || form_menu_id === 140 || form_menu_id === 141 || form_menu_id === 142 || form_menu_id === 121 || form_menu_id === 122 || form_menu_id === 199)
		{
			
	    	reservation_tour.removeClass('hidden');
	    	$aside_services.addClass('green');

		}else if(form_menu_id === 143 || form_menu_id === 184 || form_menu_id === 190 || form_menu_id === 189 || form_menu_id === 162 || form_menu_id === 185 || form_menu_id === 191 || form_menu_id === 186 || form_menu_id === 183 || form_menu_id === 187 || form_menu_id === 188 || form_menu_id === 196 || form_menu_id === 197)
		{
			
	    	reservation_hotel.removeClass('hidden');
	    	$aside_services.addClass('red');

		}else if(form_menu_id === 147 || form_menu_id === 148 || form_menu_id === 149 || form_menu_id === 150)
		{
			
	    	reservation_transport.removeClass('hidden');
	    	$aside_services.addClass('yellow');

		}else
		{
			reservation_transport.removeClass('hidden');
	    	$aside_services.addClass('yellow');
		}
	}

	
	 if(localStorage.getItem('form_reservation_option'))
           {
                if($aside_services.hasClass('open'))
               		$aside_services.removeClass('open shake')
           } 

	 $(".chosen-select").chosen({width:"100%"});

	   /*
        assigned dynamic height to page-tour section  
         */
        height_pageTour = $('.page-tour div[itemprop="articleBody"]').height();
        height_pageAbout = $('.page-about div[itemprop="articleBody"]').height();
		height_toursGallery = $('.tours-gallery').height();
		
		$('.page-tour').height(height_pageTour + height_toursGallery);
		$('.page-about').height(height_pageAbout + height_toursGallery - 200);


		

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
    	
    	reservation_hotel.addClass('hidden');
    	reservation_tour.addClass('hidden');
    	reservation_transport.addClass('hidden');
    	//console.log($(this).data('activitie'))
		$aside_services.find('#'+ $(this).data('form') +'-destination option[value="'+ $(this).data('activitie') +'"]').attr("selected",true);
    	
    	if ($(this).data('form') === 'tour')
    	{
    		reservation_tour.removeClass('hidden');
    		$aside_services.addClass('green');
    		
    		
    	}	
    	if ($(this).data('form') === 'hotel')
    	{
    		reservation_hotel.removeClass('hidden');
    		$aside_services.addClass('red');
    		
    	}
    	if ($(this).data('form') === 'transport')
    	{	
    		reservation_transport.removeClass('hidden');
    		$aside_services.addClass('yellow');
    		
		}

    	if($aside_services.hasClass('open'))
    		$aside_services.addClass('shake')
    	else
    		$aside_services.addClass('open shake');

    	setTimeout(function(){
    		$aside_services.removeClass('shake')	
    	}, 3000);

    	$(".chosen-select").trigger("chosen:updated");

    	e.preventDefault();
    });

	$cotizador.on('click','.close', function (e) {
		$cotizador.removeClass('open');
		$btn_budget.show()
	});

	dd.addClass('hidden');
	dd.first().removeClass('hidden');

	$('.link-interest').find('dd').addClass('hidden');

	linkInterest.on('click','dt', function (e) {
		$(this)
			.next()
				.toggle();
				//.siblings('dd')
					//.slideUp(200);
		
	});

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


		height_pageTour = $('.page-tour div[itemprop="articleBody"]').height();
		height_pageAbout = $('.page-about div[itemprop="articleBody"]').height();
		height_toursGallery = $('.tours-gallery').height();
		
		$('.page-tour').height(height_pageTour + height_toursGallery);
		$('.page-about').height(height_pageAbout + height_toursGallery - 200);
	});	 

	//tabs hotels
	contentArticles.find('article').hide();
	contentArticles.find('article.intro').fadeIn(500);
	tabs.find('li').on('click',function(e){
		
		tabs.find('li').removeClass('active');
		$(this).addClass('active');
		
		if(e.currentTarget.id == "booknow") {

			if($aside_services.hasClass('open'))
	    		$aside_services.addClass('shake')
	    	else
	    		$aside_services.addClass('open shake');

	    	setTimeout(function(){
	    		$aside_services.removeClass('shake')	
	    	}, 3000);

    	
			return false	
		}

		contentArticles.find('article').hide();
		contentArticles.find('article.'+ e.currentTarget.id).fadeIn(500);
		 

		 e.preventDefault();
		
	});

	//reservation tour
	// LOAD ACTIVITIES FORM RESERVATION
	$.getJSON('/helpers/tours.php', function(data) {

		  var items = [];

		  var select = $('#tour-destination').empty();
        $.each(data, function(i,item) {
            select.append( '<option value="'
                                 + $.trim(item.title)
                                 + '">'
                                 + item.title
                                 + '</option>' ); 


		 
		});
		// for day trips selection
		select.append( '<option value="Liberia Shopping and Waterfall">Liberia Shopping and Waterfall</option>' );
		select.append( '<option value="Guaitil Pottery Shopping">Guaitil Pottery Shopping</option>' );  

		select.prepend('<option value=""></option>');
		
		$(".chosen-select").trigger("chosen:updated");



	});
	//chosen

	$(".chosen-select").chosen();
	
	
	
	//FORM SUBMIT RESERVATION

	//$( "#date" ).datepicker();
	//$( "#dateP" ).datepicker();
	
	 $("#formTour").validate({

	 	messages:
	 	{
	 		"tour-fname":{
	 			required:'*'
	 		},
	 		"tour-email":{
	 			required:'*',
	 			email:'*'
	 		},
	 		"tour-destination":{
	 			required:'*'
	 		},
	 		"tour-children":{
	 			required:''
	 		},
	 		"tour-persons":{
	 			required:'',
	 			number:''
	 		},
	 		"tour-phone":{
	 			required:'*'
	 		},
	 		"tour-pdate":{
	 			required:'*'
	 		},
	 		"tour-hotelpickup":{
	 			required:'*'
	 		},
	 		"tour-type":{
	 			required:'*'
	 		},
	 		
	 		
	 		
	 	},
	 	rules: {
	 		
		    
		    "tour-destination":{
		    	required: true
		    },
		    
		    "tour-children": {

		      number: true

		    },
		     "tour-persons": {

		      required: true,

		      number: true

		    },
		    "tour-type":{
	 			required: true
	 		}
		     
		


		   

		  },
		  errorPlacement: function(error, element) {

		    if (element.attr("name") == "conditions") {

		      error.insertAfter(".terms-text");

		    } else if (element.attr("name") == "credit") {

		       error.insertAfter("#exp_card");

		    }else{
		    	error.insertAfter(element);
		    }

		  },

		  submitHandler: function(form) {

		    var formInput =  $('#formTour').serializeArray();
			var url = "/helpers/reservation_tour.php";
			
			$.post(url, formInput, function(data){
						console.log(data);
						
						limpiaForm($('#formTour'));
						limpiaChosen();

						if(data=="ok")
							$('.mensaje').html('<span class="ok">Reservation sent successfully</span>');
						else
							$('.mensaje').html('<span class="error">Error sending the reservation</span>');


						setTimeout(function(){  
					        $('.mensaje').fadeOut(200,function() {

							    $('.mensaje span').remove();
							    $('.mensaje').show();

							  });}, 2000);  


					});
		   // form.submit();

		  }

		 });

//reservation transport
	
	$('.datepicker').pickadate();
	
	//FORM SUBMIT RESERVATION
	
	
	
	 $("#formTransport").validate({

	 	messages:
	 	{
	 		"transport-fname":{
	 			required:'*'
	 		},
	 		"transport-email":{
	 			required:'*',
	 			email:'*'
	 		},
	 		"transport-destination":{
	 			required:'*'
	 		},
	 		"transport-children":{
	 			required:''
	 		},
	 		"transport-persons":{
	 			required:'',
	 			number:''
	 		},
	 		
	 		"transport-pdate":{
	 			required:'*'
	 		},
	 		"transport-rdate":{
	 			required:'*'
	 		},
	 		
	 		
	 		
	 	},
	 	rules: {
	 		
		    
		    "transport-destination":{
		    	required: true
		    },
		    
		    "transport-children": {

		      number: true

		    },
		     "transport-persons": {

		      required: true,

		      number: true

		    }
		     
		


		   

		  },
		  errorPlacement: function(error, element) {

		    if (element.attr("name") == "conditions") {

		      error.insertAfter(".terms-text");

		    } else if (element.attr("name") == "credit") {

		       error.insertAfter("#exp_card");

		    }else{
		    	error.insertAfter(element);
		    }

		  },

		  submitHandler: function(form) {

		    var formInput =  $('#formTransport').serializeArray();
			var url = "/helpers/reservation_transport.php";
			
			$.post(url, formInput, function(data){
						console.log(data);
						
						limpiaForm($('#formTransport'));
						limpiaChosen();

						if(data=="ok")
							$('.mensaje').html('<span class="ok">Reservation sent successfully</span>');
						else
							$('.mensaje').html('<span class="error">Error sending the reservation</span>');


						setTimeout(function(){  
					        $('.mensaje').fadeOut(200,function() {

							    $('.mensaje span').remove();
							    $('.mensaje').show();

							  });}, 2000);  


					});
		   // form.submit();

		  }

		 });

	//reservation hotel
	// LOAD ACTIVITIES FORM RESERVATION
	$.getJSON('/helpers/hotels.php', function(data) {

		  var items = [];

		  var select = $('#hotel-destination').empty();
        $.each(data, function(i,item) {
            select.append( '<option value="'
                                 + $.trim(item.title)
                                 + '">'
                                 + item.title
                                 + '</option>' ); 


		 
		});
		select.prepend('<option value=""></option>');
		
		$(".chosen-select").trigger("chosen:updated");



	});
	//chosen

	$(".chosen-select").chosen();
	
	
	
	//FORM SUBMIT RESERVATION

	//$( "#date" ).datepicker();
	//$( "#dateP" ).datepicker();
	
	 $("#formHotel").validate({

	 	messages:
	 	{
	 		"hotel-fname":{
	 			required:'*'
	 		},
	 		"hotel-email":{
	 			required:'*',
	 			email:'*'
	 		},
	 		"hotel-destination":{
	 			required:'*'
	 		},
	 		"hotel-children":{
	 			required:''
	 		},
	 		"hotel-persons":{
	 			required:'',
	 			number:''
	 		},
	 		"hotel-phone":{
	 			required:'*'
	 		},
	 		"hotel-pdate":{
	 			required:'*'
	 		},
	 		"hotel-hotelpickup":{
	 			required:'*'
	 		},
	 		
	 		
	 		
	 	},
	 	rules: {
	 		
		    
		    "hotel-destination":{
		    	required: true
		    },
		    
		    "hotel-children": {

		      number: true

		    },
		     "hotel-persons": {

		      required: true,

		      number: true

		    }
		     
		


		   

		  },
		  errorPlacement: function(error, element) {

		    if (element.attr("name") == "conditions") {

		      error.insertAfter(".terms-text");

		    } else if (element.attr("name") == "credit") {

		       error.insertAfter("#exp_card");

		    }else{
		    	error.insertAfter(element);
		    }

		  },

		  submitHandler: function(form) {

		    var formInput =  $('#formHotel').serializeArray();
			var url = "/helpers/reservation_hotel.php";
			
			$.post(url, formInput, function(data){
						console.log(data);
						
						limpiaForm($('#formHotel'));
						limpiaChosen();

						if(data=="ok")
							$('.mensaje').html('<span class="ok">Reservation sent successfully</span>');
						else
							$('.mensaje').html('<span class="error">Error sending the reservation</span>');


						setTimeout(function(){  
					        $('.mensaje').fadeOut(200,function() {

							    $('.mensaje span').remove();
							    $('.mensaje').show();

							  });}, 2000);  


					});
		   // form.submit();

		  }

		 });

	$('.form-type').change(function (e) {

		var self = $(this);
		reservation_hotel.addClass('hidden');
    	reservation_tour.addClass('hidden');
    	reservation_transport.addClass('hidden');
    	$aside_services.removeClass('yellow red green');

    	if (self.val() === 'tour')
    	{
    		reservation_tour.removeClass('hidden');
    		$aside_services.addClass('green');
    		$aside_services.find('.form-type').val('tour');

    	}	
    	if (self.val() === 'hotel')
    	{
    		reservation_hotel.removeClass('hidden');$aside_services.addClass('red');
    		$aside_services.find('.form-type').val('hotel');
    	}
    	if (self.val() === 'transport')
    	{	
    		reservation_transport.removeClass('hidden');$aside_services.addClass('yellow');
    		$aside_services.find('.form-type').val('transport');
		}

	})

 // FUNCTION LIMPIAR FORM
	  function limpiaChosen() {
	 	
	 	$("#tour-destination").val('').trigger("chosen:updated");
		$("#tour-adults").val('').trigger("chosen:updated");
		$("#tour-children").val('').trigger("chosen:updated");

		$("#transport-destination").val('').trigger("chosen:updated");
		$("#transport-adults").val('').trigger("chosen:updated");
		$("#transport-children").val('').trigger("chosen:updated");

		$("#hotel-destination").val('').trigger("chosen:updated");
		$("#hotel-adults").val('').trigger("chosen:updated");
		$("#hotel-children").val('').trigger("chosen:updated");
		
		
	}
	 function limpiaForm(miForm) {
	 	
		 // recorremos todos los campos que tiene el formulario
		 $(":input", miForm).each(function() {
		 var type = this.type;
		 var tag = this.tagName.toLowerCase();
		 //limpiamos los valores de los campos…
		if (type == 'text' || type == 'password'  || type == 'email' || tag == 'textarea')
		this.value = "";
		 // excepto de los checkboxes y radios, le quitamos el checked
		 // pero su valor no debe ser cambiado
		 else if (type == 'checkbox' || type == 'radio')
		this.checked = false;
		 // los selects le ponesmos el indice a -
		 else if (tag == 'select')
		this.selectedIndex = -1;
		 });
	}

      
	    
  
	

})(jQuery);
