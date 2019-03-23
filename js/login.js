function printUserInfo() {
    var node =document.createElement('p');

    document.getElementById("barraSopra").lastChild.appendChild(node);
  }
// These two functions need no customization.
function ChangeBackgroundColor(div) {
  var TableBackgroundMouseoverColor = "#c8c8c8";
  div.style.backgroundColor = TableBackgroundMouseoverColor;
}
function RestoreBackgroundColor(div) {
  var TableBackgroundNormalColor = "transparent";
   div.style.backgroundColor = TableBackgroundNormalColor;
}
