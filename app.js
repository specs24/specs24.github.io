function onReady() {
	const addToDoForm = document.getElementById('addToDoForm');
	const newToDoText = document.getElementById('newToDoText');
	const ToDoList = document.getElementById('ToDoList');
}

addToDoForm.addEventListener('submit',() => {
	event.preventDefault();
	let title = newToDoText.value;
	
	let newLi = document.createElement('li);
	let checkbox = document.createElement('input);
	checkbox.type = "checkbox";
					   
	newLi.textContent = title;
	newLi.appendChild(checkbox);
	
	toDoList.appendChild(newLi);
	
	newToDoText.value = '';
});
}


window.onload = function() {
	alert("The window has loaded");
	onReady();
};

	
