
		(function( $ ) {
   			 'use strict';


		$(document).ready(function show_toggle() {

			$("#menu").click(function() {

				$( "#menu_full" ).slideToggle(500);
			});
		});
		$(document).ready(function() {

			$("#what").click(function() {

				$("#what_full").toggle("slow");
			});
		});
		$(document).ready(function() {

			$("#full_text").click(function() {

				$("#full").toggle("slow");
			});
		});
		$(document).ready(function() {

			$("#cicerone").click(function() {

				$("#cicerone_info").toggle("slow");
			});
		});



		//close
		//function hide(target) {
    	//	document.getElementById(target).style.display = 'none';
		//}

		$(document).ready(function(){
			$("#hidepanel").click(function(){
	        $("#what_full").hide(500);
	        });
    	});

    	$(document).ready(function(){
			$("#hidepanel2").click(function(){
	        $("#full").hide(500);
	        });
    	});

    	$(document).ready(function(){
			$("#hidepanel3").click(function(){
	        $("#cicerone_info").hide(500);
	        });
    	});

    	})( jQuery );