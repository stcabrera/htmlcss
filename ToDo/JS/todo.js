
    var button = document.getElementById("add"),
        list = document.getElementById("list"),
        input = document.getElementById("input");


        button.addEventListener("click", addItemToList);
        



    function addItemToList() {
        if (input.value !== "") {
            
            var listItem = document.createElement("li");

            listItem.className = "list__item";
            
             listItem.innerHTML = '<div class="check">' + '<input type="checkbox" class="list__checkbox"></div>' + '<div id="input" class="eingabe">'+input.value+'</div>'+ '<button id="delete">' + '<div class= "list__delete"></div></div>';


            input.value = "";            
            list.appendChild(listItem);
            
            
        }
    }

input.addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        document.getElementById("add").click();
    }
});
