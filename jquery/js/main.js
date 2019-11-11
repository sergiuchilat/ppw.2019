$(document).ready(function() {
	$('body').css({
		background: 'red'
	});


	$('button:nth-child(1)').on('click', function(){
		$('body').css({
			background: 'green'
		});
	});

	$('button:nth-child(2)').on('click', function(){
		$('body').css({
			background: 'blue'
		});
	});

	$('#yellowButton').on('click', function(){
		$('body').css({
			background: 'yellow'
		});
	});

	$('#hoverButton').on('mouseenter', function(){
		$('#hoverButton').css({
			background: 'violet'
		});
	});

	$('#hoverButton').on('mouseleave', function(){
		$('#hoverButton').css({
			background: 'cyan'
		});
	});

	$(document).on('keydown', function(event){
		console.log('Mario move', event.which);

		const x = $('#mario').position().left;
		const y = $('#mario').position().top;

		console.log('X = ', $('#mario').position().left)
		console.log('Y = ', $('#mario').position().top)

		switch(event.which){
			case 39: 

				if(x < 450){
					$('#mario').animate({
						left: '+=50px'
					}, 100);
				}
				break;
			case 37: 
				$('#mario').animate({
					left: '-=50px'
				}, 100);
				break;
			case 38: 
				$('#mario').animate({
					bottom: '+=50px'
				}, 100);
				break;
			case 40: 
				if(y > 350){
					$('#mario').animate({
						width: '-=50px'
					}, 100);
				}
				$('#mario').animate({
					bottom: '-=50px'
				}, 100);
				break;
		}		
	});
});