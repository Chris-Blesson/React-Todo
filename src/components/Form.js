import React from 'react';
import TodoList from './TodoList';
const Form = (props)=>{

  const inputHandler = (e)=>{
    props.setInputText(e.target.value);
  }

  const submitHandler = (e)=>{
      props.setTodoList([...props.todos,{text:props.inputText,id:Math.random()*10000,completed:false}])
      props.setInputText("");
  }

  const filterHandler = (e)=>{
      props.setFilter(e.target.value);
  }
  return(
    <div className="container mt-4">
        <h2>ADD LISTS</h2>
        <div className="list-section d-flex mt-4">
           <input value={props.inputText } onChange={inputHandler}  type="text" className="form-control w-25"/>
           <button onClick={submitHandler} type="submit" className="btn btn-primary ml-3 mb-2"> Submit </button>
           <select onChange={filterHandler} name="todos" className="filter-todo selectOption">
            <option value="All">All</option>
            <option value="Completed">Completed</option>
            <option value="Uncompleted">Uncompleted</option>
           </select>
       </div>
       <ul className="list-group">
       {(props.filterTodo).map((todo)=>(
         <TodoList key={todo.id} id={todo.id} todo={todo} setTodoList={props.setTodoList} todos={props.todos}/>
       ))}

       </ul>
    </div>

  )

}
export default Form;
