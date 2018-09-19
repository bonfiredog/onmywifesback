$(document).ready(function(){


				 $('#pdf').mouseover(
			 	    function () {
							if (
							parseInt($("#chromehoverpopup").css("bottom")) < 30 &&
							parseInt($("#bloghoverpopup").css("bottom")) < 30 &&
							parseInt($("#cchoverpopup").css("bottom")) < 30 &&
							parseInt($("#cwlhoverpopup").css("bottom")) < 30 &&
							parseInt($("#blhoverpopup").css("bottom")) < 30
							) {
			 			$('#inuithoverpopup').animate({
			 	         opacity: '1',
			 					 bottom: '95%'
			 			 }, 300);
					 };
			 	 });

				 $("#pdf").mouseout(
					 function() {
			 	     $('#inuithoverpopup').animate({
			 	         opacity: '0',
			 					 bottom: '-159%'
			 	     }, 300);
			 	     });

//Hovering functionality
	$('#chrome').mouseover(
			function() {

				if (
				parseInt($("#inuithoverpopup").css("bottom")) < 30 &&
				parseInt($("#bloghoverpopup").css("bottom")) < 30 &&
				parseInt($("#cchoverpopup").css("bottom")) < 30 &&
				parseInt($("#cwlhoverpopup").css("bottom")) < 30 &&
				parseInt($("#blhoverpopup").css("bottom")) < 30
				) {
			  $('#chromehoverpopup').animate({
					 opacity: '1',
					 bottom: '95%'
			  }, 300);
			};

	 });

	 $('#chrome').mouseout(
		 function() {
			 $('#chromehoverpopup').animate({
					opacity: '0',
					bottom: '-159%'
			 }, 300);

		 });



					 $('#blog').mouseover( function() {
								if (
								parseInt($("#chromehoverpopup").css("bottom")) < 30 &&
								parseInt($("#inuithoverpopup").css("bottom")) < 30 &&
								parseInt($("#cchoverpopup").css("bottom")) < 30 &&
								parseInt($("#cwlhoverpopup").css("bottom")) < 30 &&
								parseInt($("#blhoverpopup").css("bottom")) < 30
								) {
				 			$('#bloghoverpopup').animate({
				 	         opacity: '1',
				 					 bottom: '95%'
				 			 }, 300);
						 }
					 });

					 $('#blog').mouseout( function() {
				 	     $('#bloghoverpopup').animate({
				 	         opacity: '0',
				 					 bottom: '-159%'
				 	     }, 300);
				 	     });



							 $('#copyright').mouseover(function() {
										if (
										parseInt($("#chromehoverpopup").css("bottom")) < 30 &&
										parseInt($("#inuithoverpopup").css("bottom")) < 30 &&
										parseInt($("#bloghoverpopup").css("bottom")) < 30 &&
										parseInt($("#cwlhoverpopup").css("bottom")) < 30 &&
										parseInt($("#blhoverpopup").css("bottom")) < 30
										) {
							 		$('#cchoverpopup').animate({
							 				 opacity: '1',
							 				 bottom: '95%'
							 		 }, 300);
								 }
							 });

							 $('#copyright').mouseout(function() {
							 		 $('#cchoverpopup').animate({
							 				 opacity: '0',
							 				 bottom: '-159%'
							 		 }, 300);

							 		 });




									 $('#cwl').mouseover(function() {
												if (
												parseInt($("#inuithoverpopup").css("bottom")) < 30 &&
												parseInt($("#bloghoverpopup").css("bottom")) < 30 &&
												parseInt($("#cchoverpopup").css("bottom")) < 30 &&
												parseInt($("#chromehoverpopup").css("bottom")) < 30 &&
												parseInt($("#blhoverpopup").css("bottom")) < 30
												) {
								 			$('#cwlhoverpopup').animate({
								 	         opacity: '1',
								 					 bottom: '95%'
								 			 }, 300);
								 	 }
								 });

								 $('#cwl').mouseout(function() {
								 	     $('#cwlhoverpopup').animate({
								 	         opacity: '0',
								 					 bottom: '-159%'
								 	     }, 300);
								 	     });



$('#bl').mouseover(function() {
		if (
		parseInt($("#inuithoverpopup").css("bottom")) < 30 &&
		parseInt($("#bloghoverpopup").css("bottom")) < 30 &&
		parseInt($("#cchoverpopup").css("bottom")) < 30 &&
		parseInt($("#cwlhoverpopup").css("bottom")) < 30 &&
		parseInt($("#chromehoverpopup").css("bottom")) < 30
		) {
	$('#blhoverpopup').animate({
			 opacity: '1',
			 bottom: '95%'
	 }, 300);
 }
 });

 $('#bl').mouseout(function() {
	 $('#blhoverpopup').animate({
			 opacity: '0',
			 bottom: '-159%'
	 }, 300);
	 });
		 });
