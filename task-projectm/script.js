var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");



function inputLength() {
	return input.value.length;
}

function createListElement() {
	var btn = document.createElement("BUTTON");
	btn.innerHTML = "remove";  
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
	li.append(btn);
	
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();

	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function itemDone() 
{

	ul.addEventListener("click", function(e){
		
			if(e.target && e.target.tagName === "LI" )
			{
				e.target.classList.toggle("done");
				
			}
			
		})
}


function removeItem(event)
{
	if(event.target.innerHTML === "remove") {
		event.target.parentElement.remove();
		event.target.remove();

	}
	
}

function addButtons()
{
	lll=document.getElementsByTagName("li");
	
	for(var i = 0; i < lll.length; i++)
	{
		var btn = document.createElement("BUTTON");
		btn.innerHTML = "remove";  
		lll[i].appendChild(btn);
	}
}

addButtons();

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

itemDone();

ul.addEventListener("click", removeItem );




