import React, {useState} from 'react'

export interface ITodoForm {
  addNewItem: (item: string) => void;
}

const TodoForm: React.FC<ITodoForm> = (props) => {

  const [value, setValue] = useState('');

  const valueHandler = (e:React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  };

  const submitHandler = (e:React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(value){
      props.addNewItem(value);
      setValue('');
    }
  };

  return(
    <div className='input-group mt2'>
      <form onSubmit={submitHandler}>
        <label htmlFor="title">Write down</label>
        <input
          value={value}
          type="text"
          id='title'
          onChange={valueHandler}
        />
      </form>

    </div>
  )
};

export default TodoForm