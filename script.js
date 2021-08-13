function hoverGrow() {
  var grow = document.getElementById('grow').style.width = '11%'
  var grow = document.getElementById('grow').style.transitionDuration = '0.15s'
}
function hoverShrink() {
  var shrink = document.getElementById('grow').style.width = "10%"
  var shrink = document.getElementById('grow').style.transitionDuration = '0.15s'
}
function getFormValue() {
  var fname = document.getElementById('fname').value; document.getElementById('nameDisplay').innerHTML = 'Hey, ' + fname;
  var formDel = document.getElementById("form");
  formDel.remove();
  var buttonDel = document.getElementById("subbutton");
  buttonDel.remove();
}
function linkGrow() {
  var linkGrow = document.getElementById('linkedin').style.width = '5%'
  var linkGrow = document.getElementById('linkedin').style.height = '5%'
}
function linkShrink() {
  var linkShrink = document.getElementById('linkedin').style.width = '4%'
  var linkShrink = document.getElementById('linkedin').style.height = '4%'
}
function youGrow() {
  var youGrow = document.getElementById('youtube').style.width = '6.5%'
  var youGrow = document.getElementById('youtube').style.height = '6.5%'
}
function youShrink() {
  var youShrink = document.getElementById('youtube').style.width = '5.5%'
  var youShrink = document.getElementById('youtube').style.height = '5.5%'
}
function instaGrow() {
  var instaGrow = document.getElementById('insta').style.width = '6%'
  var instaGrow = document.getElementById('insta').style.height = '6%'
}
function instaShrink() {
  var instaShrink = document.getElementById('insta').style.width = '5%'
  var instaShrink = document.getElementById('insta').style.height = '5%'
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