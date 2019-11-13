$(document).ready(function(){
	showLoginPopup();
	$('#showLoginPopup').on('click', function(){
		showLoginPopup();
	});

	$('.popup #close').on('click', function(){
		hideLoginPopup();
	});

	$('#submit').click(function(e){
		e.preventDefault();
		validateLoginForm();
	});

	
});

function showLoginPopup(){
	$('.popup, .shadow').css({
		display: 'block'
	});
}

function hideLoginPopup(){
	$('.popup, .shadow').css({
		display: 'none'
	});
}

function validateLoginForm(){
	let username = $('#username').val();
	let password = $('#password').val();

	if(username.length < 5){
		$('#error').html('Username error');
	}

	if(password.length < 4){
		alert('Password error');
	}
}