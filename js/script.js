function init(){
  function alertText(){
    var inpt = document.getElementById('entryinput');
    var otpt = document.getElementById('textoutput');
    otpt.innerHTML = inpt.value;
    alert('Andrew Rosnberg: ' + inpt.value);
  }
  var clckBtn = document.getElementById('entrybutton');
  clckBtn.addEventListener('click', alertText);
}
window.addEventListener('load', init);
