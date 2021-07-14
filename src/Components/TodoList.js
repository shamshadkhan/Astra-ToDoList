import React from "react";
import Todo from "./Todo";
import Footer from "./Footer";

const TODO_FILTERS = {
  SHOW_ALL: () => true,
  SHOW_ACTIVE: (todo) => !todo.completed,
  SHOW_COMPLETED: (todo) => todo.completed,
};

function TodoList (props) {
  const { actions, todos } = props;
  const [filterStatus, setFilterStatus] = React.useState("SHOW_ALL");
  const filteredTodos = todos.filter(TODO_FILTERS[filterStatus]);
  const completedCount = todos.reduce((count, todo) => {
    return todo.completed ? count + 1 : count;
  }, 0);
  const activeCount = todos.length - completedCount;


  return (
    <section className="main">
        <ul className={`todo-list`}>
          { filteredTodos.map((todo) => (
            <Todo key={todo.id} todo={todo} {...actions} />
          ))}
        </ul>
      { todos.length ? 
        <Footer
          activeCount={activeCount}
          filter={filterStatus}
          onShow={(e) => setFilterStatus(e)}
        />
        : 
        <section className="main">
          <ul className="todo-list"></ul>
        </section>
      }
      
    </section>
  );
}

export default TodoList;