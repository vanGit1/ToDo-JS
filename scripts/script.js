let addMessage = document.querySelector('.message'),
	addButton = document.querySelector('.add'),
	todo = document.querySelector('.todo');

let todoList = []; // empty array

// localStorage
if (localStorage.getItem('todo')) {
	todoList = JSON.parse(localStorage.getItem('todo'));
	displayMessages();
}

// addEventListener
addButton.addEventListener('click', function () {
	if (!addMessage.value) return alert('Введите задачу');
	let newTodo = {
		todo: addMessage.value,
		checked: false,
		important: false,
	};

	todoList.push(newTodo);
	displayMessages();
	localStorage.setItem('todo', JSON.stringify(todoList));
	addMessage.value = '';
});

//displayMessages
function displayMessages() {
	let displayMessage = ' ';
	if (todoList.length === 0) todo.innerHTML = '';
	todoList.forEach((item, i) => {
		displayMessage += `
		<li>
			<input type='checkbox' id='item_${i}' ${item.checked ? 'checked' : ''}>
			<label for='item_${i}' class="${item.important ? 'important' : ''}" >${
			item.todo
		}</label>
		</li>
		`;
		todo.innerHTML = displayMessage;
	});
}
// addEventListener & localStorage for check-box
todo.addEventListener('change', event => {
	let forLabel = todo.querySelector(
		'[for=' + event.target.getAttribute('id') + ']'
	);
	let valueLabel = forLabel.innerHTML;
	todoList.forEach(item => {
		if (item.todo === valueLabel) {
			item.checked = !item.checked;
			localStorage.setItem('todo', JSON.stringify(todoList));
		}
	});
});

// Context Menu
todo.addEventListener('contextmenu', event => {
	event.preventDefault();
	todoList.forEach((item, i) => {
		if (item.todo === event.target.innerHTML) {
			if (event.ctrlKey || event.metaKey) {
				todoList.splice(i, 1);
			} else {
				item.important = !item.important;
			}
			displayMessages();
			localStorage.setItem('todo', JSON.stringify(todoList));
		}
	});
});
