import React, { Component } from 'react';

class TodoForm extends Component {
  constructor () {
    super();
    this.state = {
      title: '',
      responsible: '',
      description: '',
      priority: 'Baja'
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    if (!this.state.title.length) {
      return console.log("%cAñadir título 😟", "color: red");
    }
    if (!this.state.responsible.length) {
      return console.log("%cAñadir responsable 😟", "color: red");
    }
    this.props.onAddTodo(this.state);
    this.setState({
      title: '',
      responsible: '',
      description: '',
      priority: 'Baja'
    });
  }

  handleInputChange(e) {
    const {value, name} = e.target;
    /*console.log(value, name);*/
    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <div className="card">
        <form onSubmit={this.handleSubmit} className="card-body">
          <div className="form-group">
            <input
              type="text"
              name="title"
              className="form-control"
              value={this.state.title}
              onChange={this.handleInputChange}
              placeholder="Título"
              />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="responsible"
              className="form-control"
              value={this.state.responsible}
              onChange={this.handleInputChange}
              placeholder="Responsable"
              />
          </div>
          <div className="form-group">
            <textarea
              type="text"
              name="description"
              className="form-control"
              value={this.state.description}
              onChange={this.handleInputChange}
              placeholder="Descripción"
            ></textarea>
          </div>
          <div className="form-group">
            <select
                name="priority"
                className="form-control"
                value={this.state.priority}
                onChange={this.handleInputChange}
              >
              <option className="text-secondary font-weight-bold">Baja</option>
              <option className="text-warning font-weight-bold">Media</option>
              <option className="text-danger font-weight-bold">Alta</option>
            </select>
          </div>
          <div className="text-right">
            <button type="submit" className="btn btn-success">
              Añadir
            </button>
          </div>
        </form>
      </div>
    )
  }

}

export default TodoForm;
