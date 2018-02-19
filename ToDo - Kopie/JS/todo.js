var Tools = (function () {
  var removeElement = function (element) {
    // Remove Element Code hier
  };
  
function addItem() {
        if (input.value !== "") {
            
            var listItem = document.createElement("li");

            listItem.className = "list__item";
            
             listItem.innerHTML = '<div class="check">' + '<input type="checkbox" class="list__checkbox"></div>' + '<div id="input" class="eingabe">'+input.value+'</div>'+ '<button id="delete">' + '<div class= "list__delete"></div></div>';


            input.value = "";            
            list.appendChild(listItem);
            
            
        }
    }