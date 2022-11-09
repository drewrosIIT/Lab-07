function init(){
//add your javascrip between these two lines of code
  function alertText(){
    var enter = documnet.getElementById('entryinput').value;
    var out = documnet.getElementById('textoutput');
    out.innerHTML = enter.value;
    alert('Andrew Rosenberg: ' + enter.value);
  }
    var enterBtn = document.getElementById('entrybutton');
    enterBtn.addEventListener('click', alertText);
}
window.addEventListener('load', init);
