$(document).ready(function() {

	$('.btn_play').on('click', doFizzBuzz);
	doFizzBuzz();

	function doFizzBuzz() {
		clearRoot();
		var result = window.prompt('number 1 to 100 here');
		
		if (result < 1 || result > 100) {
			return alert('Only 1 to 100 value');
		} 

		if (isNaN(result)) {
			return alert('That is not a number!');
		}

		oneToSomething(result, function(i) {
			var output = getFizzBuzz(i);
			appendToRoot(output);
		});
	}
});

function oneToSomething(count, fn) {
	for (var i = 1; i <= count; i++) {
		fn(i);
	}
}

function getFizzBuzz(num) {
	if (num % 3 === 0 && num % 5 === 0) {
		return 'fizzbuzz';
	}
	else if (num % 3 === 0) {
		return 'fizz';
	}
	else if (num % 5 === 0) {
		return 'buzz';
	}
	else {
		return num;
	}
}

function appendToRoot(content) {
	$('#root').append('<div class="content">' + content + '</div>');
}

function clearRoot() {
	$('#root').html('');
}