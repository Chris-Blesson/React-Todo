import React, { useState,useEffect } from 'react';
import Header from './components/Heading';
import Form from './components/Form';
import './App.css';


const App = ()=>{


    const [inputText,setInputText] = useState("");
    const [todos,setTodoList] = useState([]);
    const [filter,setFilter] = useState("All");
    const [filterTodo,setFilteredTodo] = useState([])

    useEffect(()=>{
          filterTodoHandler()
    },[todos,filter])


    const filterTodoHandler = ()=>{
      switch (filter) {
        case 'Completed':
              setFilteredTodo(todos.filter((item)=> item.completed === true));
              break;
        case 'Uncompleted':
            setFilteredTodo(todos.filter((item)=> item.completed === false));
            break;
        default:
         setFilteredTodo(todos);
         break

      }
    }



    return(
      <div className="App">
          <Header value="TODO APP"/>
          <Form
          todos={todos}
          setTodoList={setTodoList}
          inputText={inputText}
          setInputText={setInputText}
          filter={filter}
          setFilter={setFilter}
          filterTodo={filterTodo}
          />
      </div>



    )
}

export default App;
