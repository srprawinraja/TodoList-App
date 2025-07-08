
import {useRef, useState} from 'react';
import Todo from '../models/Todo';

export default function TodoViewModel(){
    const [todoList, setTodoList] = useState<Todo[]>([]);
    const currentId = useRef(0);

    const addTodo=(name:string)=>{
        currentId.current+=1;
        const newTodo:Todo = {
            id: currentId.current,
            todoName: name,
            todoStatus : false 
        };
        setTodoList((todoList)=>[...todoList, newTodo])
    }

    const changeStatusTodo = (id:number) => 
        setTodoList(todoList=>
            todoList.map(todo=>
                todo.id === id ? {...todo, todoStatus:!todo.todoStatus} : todo
            )
        )
    

    const deleteTodo = (id:number) => {


        setTodoList(todoList=>todoList.filter(todo=>
            todo.id !== id
        ))
        

    }

    return {
        todoList,
        addTodo,
        changeStatusTodo,
        deleteTodo,
    }
}