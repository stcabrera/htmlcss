 var button = document.getElementById("add"),
     list = document.getElementById("list"),
     input = document.getElementById("input"),
     todo = [];


 button.addEventListener("click", addItemToList);

 function removeItem(event) {
     event.target.parentNode.parentNode.parentNode.removeChild(event.target.parentNode.parentNode);
 }

 function addItemToList(todos) { // in array pushen und Renderliste aufrufen
     var input = document.querySelector('#input'),
         todoText = {
             'text': input.value
         };

     JSON.stringify(todoText);
     todo.push(todoText);
     localStorage.setItem('blub' , JSON.stringify(todo));
     input.value = '';
     render();
     console.log(todo);
 }

 function render() {
     var liste = document.querySelector('#list');
     liste.innerHTML = ''; // alte Liste löschen

     todo.forEach(function (element, index) {
         var listItem = document.createElement("li");
         listItem.className = "list__item";
         listItem.setAttribute ('id' , index);
         listItem.innerHTML = '<div class="check">' + '<input type="checkbox" class="list__checkbox"></div>' + '<div id="input" class="eingabe">' + element.text + '</div>' + '<button id="delete">' + '<div class= "list__delete"></div></div>';
         listItem.querySelector('.list__delete').addEventListener('click', removeItem);
         console.log(element);
         list.appendChild(listItem);
         console.log(index);

     })

 }
 input.addEventListener("keyup", function (event) {
     event.preventDefault();
     if (event.keyCode === 13) {
         document.getElementById("add").click();
     }
 });
