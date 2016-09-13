$(document).ready(function() {

  $('.btn_play').on('click', doFizzBuzz);

  doFizzBuzz();

  function doFizzBuzz() {
    $('#root').html('');
    var maxValue = parseInt(prompt('number 1 to 100 here'));

    // Validate input
    if (maxValue < 1 || maxValue > 100) {
      return alert('Only 1 to 100 value');
    } 
    if (isNaN(maxValue)) {
      return alert('That is not a number!');
    }
    oneToSomething(maxValue);
  }
});

function oneToSomething(count) {
  for (var i = 1; i <= count; i++) {
    var output = getFizzBuzz(i);
    $('#root').append('<div class="content">' + output + '</div>');
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
