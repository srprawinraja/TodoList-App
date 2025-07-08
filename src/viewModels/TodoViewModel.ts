import { useEffect, useRef, useState } from "react";
import uuid from "react-native-uuid";
import Todo from "../models/Todo";
import { _store_data, _retrieveData } from "../models/TodoStorage";
export default function TodoViewModel() {
  const [todoList, setTodoList] = useState<Todo[]>([]);

  useEffect(() => {
    const fetchTodoList = async () => {
      const loaded = await _retrieveData();
      setTodoList(loaded);
    };
    fetchTodoList();
  }, []);

  const addTodo = (name: string) => {
    if (name.length >= 1) {
      const newTodo: Todo = {
        id: uuid.v4(),
        todoName: name,
        todoStatus: false,
      };
      const newTodoList = [...todoList, newTodo];
      setTodoList(newTodoList);
      _store_data(newTodoList);
    }
  };

  const changeStatusTodo = (id: string) => {
    const newTodoList: Todo[] = todoList.map((todo) =>
      todo.id === id ? { ...todo, todoStatus: !todo.todoStatus } : todo
    );
    setTodoList(newTodoList);
    _store_data(newTodoList);
  };

  const deleteTodo = (id: string) => {
    const newTodoList = todoList.filter((todo) => todo.id !== id);
    setTodoList(newTodoList);
    _store_data(newTodoList);
  };

  return {
    todoList,
    addTodo,
    changeStatusTodo,
    deleteTodo,
  };
}
