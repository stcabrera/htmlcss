 var button = document.getElementById("add"),
    list = document.getElementById("list"),
    input = document.getElementById("input"),
    todo = [];


button.addEventListener("click", addItemToList);

function removeItem(event) {
    event.target.parentNode.parentNode.parentNode.removeChild(event.target.parentNode.parentNode);
}

function addItemToList(todos) {
// in array pushen und Renderliste aufrufen
    
    var value = document.querySelector('#input'),
        todoText = {'value': value};
    
	JSON.stringify(todoText);	
	todo.push(todoText);
    render();
    console.log(todo);
}

function render() {
    var liste = document.querySelector('#list');
    liste.innerHTML = ''; // alte Liste löschen

    todo.forEach(function (element) {
        
        var listItem = document.createElement("li");
        listItem.className = "list__item";
        listItem.innerHTML = '<div class="check">' + '<input type="checkbox" class="list__checkbox"></div>' + '<div id="input" class="eingabe">' + element + '</div>' + '<button id="delete">' + '<div class= "list__delete"></div></div>';
        listItem.querySelector('.list__delete').addEventListener('click', removeItem);
        list.appendChild(listItem);

    })

}
input.addEventListener("keyup", function (event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        document.getElementById("add").click();
    }
});
