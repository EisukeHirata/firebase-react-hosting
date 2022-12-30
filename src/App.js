import React,{useState} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container} from 'reactstrap'
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import TodosContextProvider, { TodosContext } from './contexts/TodoContext';

function App() {
  

  return (
    <div className="App">
      <Container>
        <h1 className="mt-4">Todo List</h1>
        <TodosContextProvider>
          <TodoForm />
          <TodoList/>
        </TodosContextProvider>
       </Container>
      
    </div>
  );
}

export default App;
