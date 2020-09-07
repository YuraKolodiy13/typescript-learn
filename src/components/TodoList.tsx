import React from 'react';
import {IApp} from '../App'

export interface ITodoList {
  state: IApp[];
  removeItem: (itemId: number) => void
  toggleChecked: (itemId: number) => void
}

const TodoList: React.FC<ITodoList> = (props) => {
  if(!props.state.length) return <p className='center'>empty list</p>;
  return(
    <ul className='collection todo-list'>
      {props.state.map((item) =>
        <li key={item.id} className='collection-item'>
          <label>
            <input
              type="checkbox"
              checked={item.checked}
              onChange={() => props.toggleChecked(item.id)}
            />
            <span>{item.name}</span>
          </label>
          <i
            className='material-icons red-text'
            onClick={() => props.removeItem(item.id)}
          >delete</i>
        </li>
      )}
    </ul>
  )
};

export default TodoList;