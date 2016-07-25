var factList = [
  "has fed a kangaroo.",
  "has been to China.",
  "studied abroad in Rome.",
  "loves New York.",
  "can't drink black coffee.",
  "thinks CodePen is fun.",
  "is never going to",
  "give you up.",
  "or let you down.",
  "more words.",
  "last one.",
  "blah.",
  "if I add another one I hope it works"
];

var perRow = factList.length;
console.log("perRow = " + perRow)
var radius = perRow * 6;
var angle = 360 / perRow;
console.log("Angle = " + angle);
var n = 1;

var height = $('h1').css('height');

function create_row(){
  for (i = 0; i < perRow; i++){
    $('.factlist').append('<li class="fact-'+i+'">'+factList[i]+'</li>');
    $('.fact-'+i+'').css({
      '-webkit-transform' : 'rotate(' + -angle * i + 'deg)',
      '-moz-transform' : 'rotate(' + -angle * i + 'deg)'
    });
  }
};

create_row();


setInterval(function(){
  $('.factlist').css({
    '-webkit-transform':'rotate(' + angle * n + 'deg)',
    '-moz-transform': 'rotate(' + angle * n + 'deg)'
  });
  n++;
}, 1000);
