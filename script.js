$(".js-verify-cups").on("click", function () {
	$(".solo-cups").addClass("active");
	$(this).addClass('hidden');
});

$(document).on("click", ".solo-cups.active .cup-wrapper", function () {
	$(this).find('.cup').css('transform', 'translate(30%,-70%) rotate(200deg)');
	$('.cup-wrapper').css('pointer-events', 'none');
	if ($(this).hasClass("cup-2")) {
		$(this).find('.cup').css('animation','none');
		$(".solo-cups .feedback.positive").show();
		$(".solo-cups .feedback.negative").hide();
	} else {
		
		$(".solo-cups .feedback.positive").hide();
		$(".solo-cups .feedback.negative").show();
	}
});

$(".js-try-again").on("click", function () {
	$('.cup').attr('style', '')
	$('.solo-cups').removeClass('active');
	$('.cup-wrapper').css('pointer-events', 'auto');
	$('.js-verify-cups').removeClass('hidden');
	$(".solo-cups .feedback").hide();
});

$(".tic-tac-toe .free").on("click", function () {
	$(this).addClass("cross");
	$(".board").css('pointer-events','none');
	if ($(this).hasClass("free-2")) {
		$(".tic-tac-toe .feedback.negative").hide();
		$(".tic-tac-toe .feedback.positive").show();
		$(".winning-line").css("height", "92%");
	} else {
		$(".tic-tac-toe .feedback.negative").show();
		$(".tic-tac-toe .feedback.positive").hide();
	}
});

$('.tic-tac-toe .js-try-again').on('click', function() {
	$(".board").css('pointer-events','auto');
	$('.free').removeClass('cross');
	$(".tic-tac-toe .feedback").hide();
});

$(".window").mouseover(function () {
	$(this).addClass("clean");
	if ($(".window.clean").length > 8) {
		$(".window-cleaning .feedback.positive").show();
		$(".window-cleaning .feedback.negative").hide();
	}
});

$('.windows__wrapper').mouseenter(function(){
	setTimeout(function(){
		if ($(".window.clean").length < 9) {
			$(".window-cleaning .feedback.positive").hide();
			$(".window-cleaning .feedback.negative").show();
			$('.windows__wrapper').css('pointer-events', 'none');
		}
	},4000);
});

$('.window-cleaning .js-try-again').on('click', function(){
	$('.window:not(:last-child)').removeClass('clean');
	$('.window-cleaning .feedback').hide();
	$('.windows__wrapper').css('pointer-events', 'auto');
});

$(document).on("click", ".emoji", function () {
	$(this).toggleClass("chosen");
});

$('.js-submit-emoji').on('click', function(){
	if ($(".emoji.chosen").length == 2) {
		$(this).addClass('disabled');
		$('.emoji').css('pointer-events', 'none');
		var emojis = [];
		$(".emoji.chosen").each(function () {
			emojis.push($(this).text());
			
		});
		if (emojis.indexOf("🐶") > -1 && emojis.indexOf("🍗") > -1) {
			$(".which-emoji .feedback.positive").show();
			$(".which-emoji .feedback.negative").hide();
		} else {
			$(".which-emoji .feedback.negative").show();
			$(".which-emoji .feedback.positive").hide();
		}
	} else {
		$('.which-emoji .instruction').append('<strong> 2 emojis!!</strong>')
	}
});

$('.which-emoji .js-try-again').on('click', function(){
	$('.which-emoji .feedback').hide();
	$('.emoji.chosen').removeClass('chosen');
	$('.emoji').css('pointer-events', 'auto');
	$('.js-submit-emoji').removeClass('disabled');
});
