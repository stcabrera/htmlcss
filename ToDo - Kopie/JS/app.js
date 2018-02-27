
    var button = document.getElementById("add"),
        list = document.getElementById("list"),
        input = document.getElementById("input");


        button.addEventListener("click", addItemToList);
        




    
function addItemToList() {
      var listItem = document.createElement('li');
      listItem.innerText = textInput.value + '';
      parentList.appendChild(listItem);
      // Neuen hinzufügen Button anhängen
      listItem.querySelector('button').addEventListener('click', removeItem);
      textInput.value = '';
    }



