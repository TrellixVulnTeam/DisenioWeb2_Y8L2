function Alert() {
  // alert('JS script working');

  var select = document.getElementById('entornorest')

  var a = select.selectedIndex = "1";

  a.innerHTML = "bb";


}

function TestSelect() {
  var selecto = document.getElementById('aa').value;

  if (selecto  === 0) {
    window.console.log('1');
  } else {
    window.console.log('this aint 1');
  }
  // console.log('Test select vorks');
  // alert('Test select vorks');
  // window.console.log('sss');
}

function Alert2() {
  window.alert('222');

  var licorSect = document.getElementById('licores');
  licorSect.style.display = "block";

}


function displayDivDemo(id, elementValue) {
  document.getElementById(id).style.display = elementValue.value == 1 ? 'block' : 'none';
}
