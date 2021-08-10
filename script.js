function hoverGrow() {
  var grow = document.getElementById('grow').style.width = '15%'
}
function hoverShrink() {
  var shrink = document.getElementById('grow').style.width = "10%"
}
function getFormValue() {
  var fname = document.getElementById('fname').value
  document.getElementById('nameDisplay').innerHTML = 'Hey, ' + fname;
  var formDel = document.getElementById("form");
  formDel.remove();
  var buttonDel = document.getElementById("subbutton");
  buttonDel.remove();
}
