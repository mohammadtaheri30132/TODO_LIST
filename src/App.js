import React, {useContext, useState} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Header from "./Component/Header";
import FormAddTodo from "./Component/FormAddInput";
import Todo from "./Component/Todo";
import {TodoList} from "./Component/TodoList";
import todosContext from "./Context/todo"
export default function App() {

    const TodosContext = useContext(todosContext)


    const [FormInput, SetForminput] = useState('')
    const [Todos, SetTodos] = useState([])


    let AddTodo = (Text) => {
        SetTodos([
            ...Todos, {key: Date.now(), done: false, text: Text}
        ])
    }


    let donetodo = (key) => {
        let list = Todos.find(item => item.key === key)
        list.done = !list.done
        SetTodos(
            Todos, list
        )
    }


    let deleteitem = (key) => {
        SetTodos(prevState =>
            prevState.filter(item => item.key !== key)
        )
    }


    return (
            <todosContext.Provider value={{
                deleteitem: deleteitem,
                donetodo: donetodo,
                Todos: Todos,
                AddTodo: AddTodo,
            }
            }>
                <div className="App">
                    <Header/>
                    <main>
                        <section className="jumbotron">
                            <div className="container d-flex flex-column align-items-center">
                                <h1 className="jumbotron-heading">خوش امدید</h1>
                                <p className="lead text-muted">محمد طاهری</p>
                                <FormAddTodo/>
                            </div>
                        </section>
                        <div className="todosList">
                            <div className="container">
                                <div className="d-flex flex-column align-items-center ">
                                    <TodoList/>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </todosContext.Provider>

    );
}

