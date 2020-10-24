import React from 'react';


const TodoList = (props)=>{
  const deleteHandler = ()=>{
    props.setTodoList((props.todos).filter((element)=>{
        if(element.id !== props.id){
            return element
        }
    }))
  }

  const completedHandler = () =>{
      props.setTodoList((props.todos).map((element)=>{
          if(element.id=== props.id){
                return {
                    ...element,completed:!element.completed
                }
          }
          return element

      }))
  }

  return(
    <div className="todo-item">
      <li className="list-group-item">
      <span className={`todo-value w-5 ${props.todo.completed ? 'completed':''}  ` }>{props.todo.text}</span>
      <div className="wrapper">
        <button onClick={completedHandler} type="button" className="btn btn-info button-align mr-5"> Completed </button>
        <button onClick={deleteHandler} type="button" className="btn btn-danger button-align"> Delete </button>
      </div>
      </li>
    </div>
  )
}

export default  TodoList;
