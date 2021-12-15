console.log($('h1'));

var buttonColours=['red','blue','green','yellow'];
var gamePattern=[];
var userClickedPatten=[];
var level=0;

$(document).on('keypress', function(){
  nextSequence();
  $('h1').text('Level '+level);
});


function playSound(name){
  var snd= new Audio('sounds/'+name+'.mp3');
  snd.play();
}

function animatePress(currentColour){
  $('.'+currentColour).addClass('pressed');
  //wait(200);
  setTimeout(function(){$('.'+currentColour).removeClass('pressed')},200);
}

function nextSequence(){
  var randomNumber=Math.floor(Math.random()*4);
  var randomColour=buttonColours[randomNumber]
  $("#"+randomColour).fadeTo(100, 0.3, function() { $(this).fadeTo(500, 1.0); });
  playSound(randomColour);
  gamePattern.push(randomColour);
  level++;
  $('h1').text('Level '+level);

}

function checkAnswer(currentLevel){
  if(userClickedPatten[currentLevel]==gamePattern[currentLevel]){
    console.log('success');
    return(1);
  }
  else{
    console.log('failure');
    return(0);
  }
}

$('.btn').click(function(event){
  console.log(event.target.id);
  var userChosenColor=event.target.id;
  playSound((userChosenColor));
  animatePress(userChosenColor);
  userClickedPatten.push(userChosenColor);
  var stat=checkAnswer(level-1);
  if(stat==1){
    setTimeout(function(){nextSequence();},1000);

  }
  else{
    alert("game over");
  }
});
