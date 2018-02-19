
    var button = document.getElementById("add"),
        list = document.querySelector(".list"),
        input = document.getElementById("input");


        button.addEventListener("click", addItemToList);


    function addItemToList() {
        if (input.value !== "") {
            
            var listItem = document.createElement("li");
            listItem.className = "list__item";
            
             listItem.innerHTML = '<input type="checkbox" class="list__checkbox">'+ '<div class= "list__todo">'+input.value+'</div>'+'<div class= "list__delete"></div>';


            input.value = "";            
            list.appendChild(listItem);
            
            
        }
    }
