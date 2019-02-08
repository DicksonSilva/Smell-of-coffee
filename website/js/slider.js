
$(document).ready(function(){

	//Numero de slides/imagens
	var imgItems = $('.slider li').length;
	var imgPos = 1; 

	//Quantidade de select
	for(i = 1; i <= imgItems; i++) {
		$('.select-img').append('<li><span class="fas fa-circle"></span></li>');
	}
	//================================================


	$('.slider li').hide();
	$('.slider li:first').show();
	$('.select-img li:first').css({'color': '#FFF11B', 'font-size': '18px'});

	//FUNÇÕES CLICK
	$('.select-img li').click(selectImg);
	$('.control-right span').click(nextSlider);
	$('.control-left span').click(prevSlider);


	setInterval(function(){
		nextSlider();
	}, 4000);

	// FUNÇÕES 
	function selectImg(){

		var ImgPosition = $(this).index() + 1;

		$('.slider li').hide();
		$('.slider li:nth-child('+ ImgPosition +')').fadeIn();

		$('.select-img li').css({'color': '#FDFFFC', 'font-size': '12px'});
		$(this).css({'color': '#FFF11B', 'font-size': '18px'});

		imgPos = ImgPosition;

	}

	function nextSlider() {

		if (imgPos >= imgItems) {
			imgPos = 1;
		} else {
			imgPos++;
		}

		$('.select-img li').css({'color': '#FDFFFC', 'font-size': '12px'});
		$('.select-img li:nth-child('+ imgPos +')').css({'color': '#FFF11B', 'font-size': '18px'});

		$('.slider li').hide();
		$('.slider li:nth-child('+ imgPos +')').fadeIn();

	}

	function prevSlider() {

		if (imgPos <= 1) {
			imgPos = imgItems;
		} else {
			imgPos--;
		}

		$('.select-img li').css({'color': '#FDFFFC', 'font-size': '12px'});
		$('.select-img li:nth-child('+ imgPos +')').css({'color': '#FFF11B', 'font-size': '18px'});

		$('.slider li').hide();
		$('.slider li:nth-child('+ imgPos +')').fadeIn();

	}

});