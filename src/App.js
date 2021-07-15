import React, { useEffect } from 'react';
import Header from './Components/Header';
import TodoList from './Components/TodoList';
import api from './utils/api';
import uuid from 'node-uuid';

function App() {
	const [toDoLists, setToDoLists] = React.useState([]);

	const getRestTodos = async () => {
		api.getRestTodos().then((toDoLists) => setToDoLists( toDoLists ));
	};

	const addRestTodo = async (text) => {
		const toDoListsArray = [...toDoLists];
		const item = {
			id: uuid.v1(),
			completed: false,
			text: text,
			key: 'rest',
		}
		await api.addRestTodo(item);
		toDoListsArray.push(item);
		setToDoLists(toDoListsArray);
	};

	const completeRestTodo = async (todo) => {
		const toDoListsArray = [...toDoLists];
		const item = {
			id: todo.id,
			completed: !todo.completed,
			text: todo.text,
		}
		await api.updateRestTodo(item);
		const index = toDoListsArray.findIndex(itemlist => itemlist.id === todo.id);
		toDoListsArray[index]= item;
		setToDoLists(toDoListsArray);
	};

	const deleteRestTodo = async (id) => {
		await api.deleteRestTodo(id);
		getRestTodos();
	};

	useEffect(() => {
		getRestTodos();
	}, []);	

	const actions = {
		addRestTodo: addRestTodo,
		completeRestTodo: completeRestTodo,
		getRestTodos: getRestTodos,
		deleteRestTodo: deleteRestTodo,
	};

	return (
		<div className="todos">
			<Header title="REST todos" addTodo={actions.addRestTodo} type="rest"/>
			<TodoList type="rest" todos={toDoLists} actions={actions} />
		</div>
	);
}

export default App;
