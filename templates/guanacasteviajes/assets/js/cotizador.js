(function($){
    var items = [];

    $.getJSON('/helpers/db/transports_hotels.json', function(data) {

      var select = $('#tours').empty();
       var selectReservation = $('#transport-destination').empty();
        $.each(data, function(i,item) {

            
            select.append( '<option value="'
                                 + $.trim(item.name)
                                 + '">'
                                 + item.name
                                 + '</option>' ); 

            selectReservation.append( '<option value="'
                                 + $.trim(item.name)
                                 + '">'
                                 + item.name
                                 + '</option>' ); 
            
            
            items.push(item);


     
        });
         select.prepend('<option value=""></option>');
         selectReservation.prepend('<option value=""></option>');
         
         if(localStorage.getItem('destination'))
           {
                $(".destino option[value='"+localStorage.getItem('destination')+"']").attr("selected",true);
                localStorage.removeItem('destination');
           } 
          
        
         
         $("#tours option[value='']").attr("selected",true);
         $("#transport-destination option[value='']").attr("selected",true);
          
         // $("#tours").trigger('change');
        //  $("#toursR").trigger('change');
         $(".chosen-select").trigger("chosen:updated");
         
       
    });

   // verifica_reservacion();



    $("#btn_cotizar").on("click",function (e) {
        
        e.preventDefault();
        
        var itemSeledted = $( "#tours" ).val();
        var numPersons = $( "#persons" ).val();
        var numChildren = $( "#children" ).val();
        var personsExtra = 0;
          var totalOne =0;
        var totalRound =0;
        var montoExtra =0;
        var ninos=0;

        if($.isNumeric(numChildren))
        {
            ninos = parseInt(numChildren);
        }else
            ninos = 0;

        if($.isNumeric(numPersons))
        {
            if((parseInt(numPersons) + ninos) > 8)
            {
                alert("Maximum 8 people. Including children over 8 years");
                $( "#persons" ).val("0");
                $( "#children" ).val("0");
            }    
            else{
                $.each(items,function (i,item) {

                    if(item.name == itemSeledted)
                        {
                            
                             if(item.shuttle)
                                    totalShuttle = item.shuttle * parseInt(numPersons);
                                else
                                    totalShuttle= "";

                            if((parseInt(numPersons) + ninos) > 4)
                            {
                                 personsExtra = parseInt(numPersons) - 4;
                                 montoExtra = 10 * personsExtra
                                 montoExtra += 10 * ninos;
                                 totalOne = item.priceOne + montoExtra;
                                 totalRound = item.priceRound + montoExtra;
                                
                                 $( "#resultOW" ).val(totalOne);
                                 $( "#resultRT" ).val(totalRound);
                                 $( "#resultSH" ).val(totalShuttle);
                            }else{
                                                            
                                $( "#resultOW" ).val(item.priceOne);
                                $( "#resultRT" ).val(item.priceRound);
                                $( "#resultSH" ).val(totalShuttle);
                            }
                              
                              $("#btn_book").show();
                              $("#typeService input[type='radio']").show();
                              $("#typeService input[type='radio']").removeAttr("disabled");
                              $(".notas").html('');
                              if(!item.shuttle)
                                {
                                     $("#typeService #chkSH").attr("disabled", "disabled");
                                     $(".notas").html("<p>* <strong>No. Children</strong> over 8 years old </p>"+
                                                        "<p>* <strong>Shuttle</strong> not available for the selected destination. </p>"+
                                                        "<p>* <strong>Shuttle</strong> is subject to schedule </p>");
                                    
                                }else
                                {
                                     $(".notas").html("<p>* <strong>No. Children</strong> over 8 years old </p>"+
                                                "<p>* <strong>Shuttle</strong> is subject to schedule </p>");
                                }    
                                
                           
                            
                        }

                }); // end each

            } // end if maximun person
            

        } // end if is numeric

        
    });

   
    $.validator.setDefaults({ ignore: ":hidden:not(select)" })

    $("#formCotizador").validate({
        errorLabelContainer: $("#cotizador div.errors"),
        rules: {
          
            tours:{
              required: true
            },
          
             persons: {

              required: true,

              number: true

            },
             children: {

              

              number: true

            }
           

          },

          submitHandler: function(form) {
            
            var formCotizar = $('#formCotizador');
            var checkedValue = formCotizar.find('input[name=ts]:checked').val();

            localStorage.setItem('persons', parseInt($( "#persons" ).val()));
            localStorage.setItem('children', parseInt($( "#children" ).val()));
            localStorage.setItem('destination',  $( "#tours" ).val());
            localStorage.setItem('ts',  checkedValue);
            localStorage.setItem('ts',  checkedValue);
            if(checkedValue == "1")
                localStorage.setItem('total',  $( "#resultOW" ).val());
            if(checkedValue == "2")
                localStorage.setItem('total',  $( "#resultRT" ).val());
            if(checkedValue == "3")
                localStorage.setItem('total',  $( "#resultSH" ).val());


            localStorage.setItem('from_quotation',  1);
            window.location.href = "/Reservation.html";
           
          

          }

         });

    $("#tours").on("change",function(){

       $("#resultOW").val("");
       $("#resultRT").val("");
       $("#resultSH").val("");
       $("#typeService input[type='radio']").hide();


    });

    function verifica_reservacion () {

        if(localStorage.getItem('persons') && localStorage.getItem('destination') && localStorage.getItem('ts') && localStorage.getItem('from_quotation'))
            {

                var idservicio = localStorage.getItem('ts');
                var persons = localStorage.getItem('persons');
                var children = localStorage.getItem('children');
                var destination = localStorage.getItem('destination');
                var total = localStorage.getItem('total');
                var servicio;

                if(idservicio == "1")
                    servicio = "One way";
                else if(idservicio == "2")
                    servicio = "Round trip";
                else
                    servicio = "Shuttle Bus";
               
                $("#Servicio option[value='"+ servicio +"']").attr("selected",true);
                $(".destino option[value='"+ destination +"']").attr("selected",true);
                $('.destino').trigger('change');
                $("#Adutos").val(persons);
                $(".ninos").val(children);
                $("#total").val(total);

                /*$("#Servicio").attr("disabled", "disabled");
                $('.destino').attr("disabled", "disabled");
                $("#Adutos").attr("disabled", "disabled");*/

                    
                  localStorage.removeItem('ts');
                  localStorage.removeItem('persons');
                  localStorage.removeItem('children');
                  localStorage.removeItem('total');
                  localStorage.removeItem('from_quotation');


                
                 
            }
    }
    function actualiza_reservacion(){

        var itemSeledted = $('#transport-destination').val();
        var numPersons = $( "#transport-persons" ).val();
        var numChildren = $( "#transport-children" ).val();
        var tipoServicio = $( "#transport-services" ).val();
        var personsExtra = 0;
        var totalOne =0;
        var totalRound =0;
        var montoExtra =0;
        var ninos=0;

        if($.isNumeric(numChildren))
        {
            ninos = parseInt(numChildren);
        }else
            ninos = 0;

        if($.isNumeric(numPersons))
        {
            if((parseInt(numPersons) + ninos) > 8)
            {
                alert("Maximum 8 people. Including children over 8 years");
                $( "#transport-persons" ).val("0");
                $( "#transport-children" ).val("0");
                $( "#total" ).val("0");
                $( "#transport-price" ).val("0");
            }    
            else{
                $.each(items,function (i,item) {

                    if(item.name == itemSeledted)
                        {
                            
                             if(item.shuttle)
                                    totalShuttle = item.shuttle * parseInt(numPersons);
                                else
                                    totalShuttle= "Not available";

                            if((parseInt(numPersons) + ninos) > 4)
                            {
                                 personsExtra = parseInt(numPersons) - 4;
                                 montoExtra = 10 * personsExtra;
                                 montoExtra += 10 * ninos;

                                 totalOne = item.priceOne + montoExtra;
                                 totalRound = item.priceRound + montoExtra;
                                
                                 if(tipoServicio == "One way")
                                    $( "#total" ).text('$ ' + totalOne);
                                    //$( "#total" ).val(totalOne);
                                else if(tipoServicio == "Round trip")
                                    $( "#total" ).text('$ ' + totalRound);
                                    //$( "#total" ).val(totalRound);
                                else if(tipoServicio == "Shuttle Bus")
                                    $( "#total" ).text('$ ' + totalShuttle);
                                    //$( "#total" ).val(totalShuttle);
                                    
                                $( "#transport-price" ).val($( "#total" ).text());
                            }else{
                                                            
                                 if(tipoServicio == "One way")
                                    $( "#total" ).text('$ ' + item.priceOne);
                                    //$( "#total" ).val(item.priceOne);
                                else if(tipoServicio == "Round trip")
                                    $( "#total" ).text('$ ' + item.priceRound);
                                    //$( "#total" ).val(item.priceRound);
                                else if(tipoServicio == "Shuttle Bus")
                                    $( "#total" ).text('$ ' + totalShuttle);
                                    //$( "#total" ).val(totalShuttle);
                                    

                                $( "#transport-price" ).val($( "#total" ).text());

                            }
                              
                              
                           
                            
                        }

                }); // end each

            } // end if maximun person
            

        } // end if is numeric

    }
$( "#transport-persons" ).keyup(function() {

 actualiza_reservacion();

});
$( "#transport-children" ).keyup(function() {
     actualiza_reservacion();
});
$('#transport-services').on("change",function(){
    actualiza_reservacion();
});
 $('#transport-destination').on("change",function(){
        actualiza_reservacion();

    });


    

})(jQuery);


   
	
 	
