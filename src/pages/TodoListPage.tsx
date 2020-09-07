import React, {useState, useEffect} from 'react';
import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";
import {IApp} from "../App";


const TodoListPage: React.FC = () => {

  const [state, setState] = useState<IApp[]>(JSON.parse(localStorage.getItem("todos") || "[]"));

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(state))
  }, [state]);

  const addNewItem = (item:any) => {
    let newItem: IApp = {name: item, id: Date.now(), checked: false};
    setState([newItem, ...state])
  };

  const toggleChecked = (itemId:number) => {
    const newState = [...state];
    newState.forEach(el => {
      if(el.id === itemId){
        el.checked = !el.checked
      }
    });
    setState(newState)
  };

  const removeItem = (itemId:number) => {
    let newState = [...state];
    newState = newState.filter(el => el.id !== itemId);
    setState(newState)
  };

  return (
    <div className='container'>
      <TodoForm
        addNewItem={addNewItem}
      />
      <TodoList
        state={state}
        removeItem={removeItem}
        toggleChecked={toggleChecked}
      />
    </div>
  )
};

export default TodoListPage