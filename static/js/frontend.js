$(document).ready(function(){


	// $( ".alert" ).delay( 800 ).fadeIn( 400 );
	// $('.alert').delay(9000).show();

	$('form').on('submit', function(ev){

		$.ajax({
			data : {
				email : $('#Email').val(),
				name : $('#name').val()
			},
			type : 'POST',
			url : '/backend'
		})
		.done(function(data){
			
			if(data.err) {

				$( "#failed" ).text(data.err).delay( 500 ).fadeIn( 400 );
				$( "#sucess" ).hide();
			}
			else {
				$( "#sucess" ).text(data.messz).delay( 500 ).fadeIn( 400 );
				$( "#failed" ).hide();
			}
		});


		ev.preventDefault();

	})
});
