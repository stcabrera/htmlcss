
    var button = document.getElementById("add"),
        list = document.getElementById("list"),
        input = document.getElementById("input");

        button.addEventListener("click", addItemToList);

function removeItem(event) {     event.target.parentNode.parentNode.parentNode.removeChild(event.target.parentNode.parentNode);
    }
        

function addItemToList() {
        if (input.value !== "") {
            var listItem = document.createElement("li");
            listItem.className = "list__item";
            listItem.innerHTML = '<div class="check">' + '<input type="checkbox" class="list__checkbox"></div>' + '<div id="input" class="eingabe">'+input.value+'</div>'+ '<button id="delete">' + '<div class= "list__delete"></div></div>';
            input.value = "";
            listItem.querySelector('.list__delete').addEventListener('click', removeItem);
            list.appendChild(listItem);
        }
        else
	{
	alert('Bitte geben Sie etwas ein!');
	}
    }

input.addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        document.getElementById("add").click();
    }
});







