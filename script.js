function hoverGrow() {
  var grow = document.getElementById('grow').style.width = '11%'
  var grow = document.getElementById('grow').style.transitionDuration = '0.15s'
}
function hoverShrink() {
  var shrink = document.getElementById('grow').style.width = "10%"
  var shrink = document.getElementById('grow').style.transitionDuration = '0.15s'
}
function getFormValue() {
  var fname = document.getElementById('fname').value;
  if (fname == '') {
    document.getElementById('nameDisplay').innerHTML += ',   mystery person!';
  }
  else if (fname == 'Joel Valerio') {
    document.getElementById('nameDisplay').innerHTML += ',   Creator!'
  }
  else {
    document.getElementById('nameDisplay').innerHTML += ', ' + fname + '!';
  }
  var formDel = document.getElementById("form");
  formDel.remove();
  var buttonDel = document.getElementById("subbutton");
  buttonDel.remove();
  var brDel = document.getElementById('formBreak'); brDel.remove();
}
function linkGrow() {
  var linkGrow = document.getElementById('linkedin').style.width = '5%'
  var linkGrow = document.getElementById('linkedin').style.height = '5%'
  var linkGrow = document.getElementById('linkedin').style.transitionDuration = '0.15s'
}
function linkShrink() {
  var linkShrink = document.getElementById('linkedin').style.width = '4%'
  var linkShrink = document.getElementById('linkedin').style.height = '4%'
  var linkShrink = document.getElementById('linkedin').style.transitionDuration = '0.15s'
}
function youGrow() {
  var youGrow = document.getElementById('youtube').style.width = '6.5%'
  var youGrow = document.getElementById('youtube').style.height = '6.5%'
  var youGrow = document.getElementById('youtube').style.transitionDuration = '0.15s'
}
function youShrink() {
  var youShrink = document.getElementById('youtube').style.width = '5.5%'
  var youShrink = document.getElementById('youtube').style.height = '5.5%'
  var youShrink = document.getElementById('youtube').style.transitionDuration = '0.15s'
}
function instaGrow() {
  var instaGrow = document.getElementById('insta').style.width = '5.5%'
  var instaGrow = document.getElementById('insta').style.height = '5.5%'
  var instaGrow = document.getElementById('insta').style.transitionDuration = '0.15s'
}
function instaShrink() {
  var instaShrink = document.getElementById('insta').style.width = '5%'
  var instaShrink = document.getElementById('insta').style.height = '5%'
  var instaShrink = document.getElementById('insta').style.transitionDuration = '0.15s'
}
function getQuizValue() {
  var answer = document.getElementsByName('q1');
  for (i = 0; i < answer.length; i++) {
    if (answer[i].checked)
      document.getElementById("result1").innerHTML
        = "Question 1: " + answer[i].value;
  }
}
function getQuizValue2() {
  var answer2 = document.getElementsByName('q2');
  for (i = 0; i < answer2.length; i++) {
    if (answer2[i].checked)
      document.getElementById("result2").innerHTML
        = "Question 2: " + answer2[i].value;
  }
}
let dayOfWeek = (new Date().getDay())
switch (dayOfWeek) {
  case 1:
    console.log("Happy Monday");
    document.getElementById("nameDisplay").innerHTML = "Happy Monday";
    break;
  case 2:
    console.log("Happy Tuesday");
    document.getElementById("nameDisplay").innerHTML = "Happy Tuesday";
    break;
  case 3:
    console.log("Happy Wednesday");
    document.getElementById("nameDisplay").innerHTML = "Happy Wednesday";
    break;
  case 4:
    console.log("Happy Thursday");
    document.getElementById("nameDisplay").innerHTML = "Happy Thursday";
    break;
  case 5:
    console.log("Happy Friday");
    document.getElementById("nameDisplay").innerHTML = "Happy Friday";
    break;
  case 6:
    console.log("Happy Saturday");
    document.getElementById("nameDisplay").innerHTML = "Happy Saturday";
    break;
  case 0:
    console.log("Happy Sunday");
    document.getElementById("nameDisplay").innerHTML = "Happy Sunday";
    break;
}