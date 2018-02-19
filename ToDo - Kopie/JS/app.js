var App = (function (t) { // über t sind alle Funktionen verfügbar aus tools.js
  var parentList = document.querySelector('#list');
  var textInput = document.querySelector('#input'); 
  var addButton = document.querySelector('#add');
    
  var init = function () {
    addButton.addEventListener('click', addItem); // Hinzufügen Button anbinden (addItem ist nicht dargestellt)
    parentList.addEventListener('click', t.delegate('li button', function(event) { //Alle löschen Buttons anbinden
t.removeElement(event.target.parentNode);
     }));
  };
  return { // Rückgabe der von aussen verfügbaren Methoden
    init: init
  };
})(Tools);
App.init(); // Initialisierungsfunktion aufrufen
