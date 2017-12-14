$(document).ready( function(){
/*splash*/
	setTimeout( function() {
		$('.content').fadeOut(500);
		},3000);
		setTimeout( function() {
			$('.content2').fadeIn(500);
		});
});


/*Activar Boton*/
$('#phone').keyup( function(){
	if($(this).val().length === 10){
		$('#boton').removeClass('disabled');
	}if($(this).val().length < 10){
		$('#boton').addClass('disabled');
	}if($(this).val().length > 10){
		$('#boton').addClass('disabled');
		$('#phone').prop('disabled',true); /*Desactivar*/
		$('#phone').prop('disabled',false); /*Activar*/
	}if (isNaN($(this).val())){
		$('#texto').text('Only Number');
		$('#boton').addClass('disabled');
	}else{
		$('#texto').text('');
	}
	return false;
});

/*Enviar codigo*/
$('#boton').click(code);

function code() {
	var code = '';
	var str = ('123456789');
	for (var i = 0; i < 3; i++) {
		code += str.charAt(Math.floor(Math.random() * str.length));
	}
	alert('your code is: LAB-' + code);
}

$('#boton2').click(showSelect);

function showSect() {
	$('.validate').show();
	$('.content2').hide();
}










