import React, { Component } from 'react';
import './App.css';

// data
import { todos } from './todos.json';

// subcomponents
import TodoForm from './components/TodoForm';

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: todos
    }
    this.handleAddTodo = this.handleAddTodo.bind(this);
  }

  removeTodo(index) {
    this.setState({
      todos: this.state.todos.filter((e, i) => {
        return i !== index
      })
    });
    console.log("%cItem " + index + " borrado con éxito 👍", "color: green");
  }

  handleAddTodo(todo) {
    this.setState({
      todos: [...this.state.todos, todo]
    })
  }

  render() {
    const todos = this.state.todos.map((todo, i) => {
      let todoInfo = todo.priority;
      if(todoInfo === "Alta"){
        todoInfo = (
          <span className="badge badge-pill badge-danger ml-2">
            {todo.priority}
          </span>
        )
      }
      if(todoInfo === "Media"){
        todoInfo = (
          <span className="badge badge-pill badge-warning ml-2">
            {todo.priority}
          </span>
        )
      }
      if(todoInfo === "Baja"){
        todoInfo = (
          <span className="badge badge-pill badge-secondary ml-2">
            {todo.priority}
          </span>
        )
      }
      return (
        <div className="col-lg-6" key={i}>
          <div className="card mt-2 mb-2">
            <div className="card-body">
              <div className="card-title text-center">
                <h3>{todo.title}</h3>
                <span>{todoInfo}</span>
                {/*<Prioridad id={i}/>*/}
              </div>
              <div className="card-text">
                {todo.description}
                <hr/>
                <p className="text-left text-secondary font-weight-bold"><small>{todo.responsible}</small></p>
              </div>
            </div>
            <div className="card-footer text-right">
              <button
                className="btn btn-danger"
                onClick={this.removeTodo.bind(this, i)}>
                Borrar
              </button>
              {/*Modal*/}
              {/*<button className="btn btn-danger"  data-toggle="modal" data-target="#confirmacionModal">
                Borrar
              </button>
              <div className="modal fade" id="confirmacionModal" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-md" role="document">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="exampleModalLabel">Mensaje de confirmación</h5>
                      <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div className="modal-body text-left">
                      <p>¿Está seguro de esta acción?</p>
                      <small className="text-danger font-weight-bold">* Recuerde que no se puede recuperar esta información</small>
                    </div>
                    <div className="modal-footer">
                      <button className="btn btn-secondary" data-dismiss="modal">Cancelar</button>
                      <button className="btn btn-danger" onClick={this.removeTodo.bind(this, i)} data-dismiss="modal">Borrar</button>
                    </div>
                  </div>
                </div>
              </div>*/}
            </div>
          </div>
        </div>
      );
    });

    // RETURN THE COMPONENT
    return (
      <div>

        <nav className="navbar navbar-dark bg-dark">
          <a className="navbar-brand" href="/">
            Tareas
            <span className="badge badge-pill badge-light ml-2">
              {this.state.todos.length}
            </span>
          </a>
        </nav>

        <div className="container">
          <div className="row mt-4">

            <div className="col-md-4 text-center">
              <TodoForm onAddTodo={this.handleAddTodo}></TodoForm>
            </div>

            <div className="col-md-8">
              <div className="row">
                {todos}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
