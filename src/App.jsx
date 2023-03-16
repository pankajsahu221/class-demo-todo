import React from "react";
import Navbar from "./Components/Navbar";
import TodoRows from "./Components/TodoRows";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: "User",
      todoItems: [
        { action: "Buy milk", done: false },
        { action: "Go shop", done: false },
        { action: "Do gym", done: false },
      ],
      newTodo: "",
    };
  }

  toggleDone = (todo) => {
    this.setState({
      todoItems: this.state.todoItems.map((item) =>
        item.action === todo.action ? { ...item, done: !item.done } : item
      ),
    });
  };

  todoRows = () => {
    return this.state.todoItems.map((item) => (
      <TodoRows key={item.key} item={item} callback={this.toggleDone} />
    ));
  };

  updateValue = (e) => {
    this.setState({
      newTodo: e.target.value,
    });
  };

  newTodo = () => {
    this.setState({
      todoItems: [
        ...this.state.todoItems,
        { action: this.state.newTodo, done: false },
      ],
    });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          {/* NAVBAR */}
          <Navbar name={this.state.userName} />

          {/* INPUT */}
          <div className="col-12">
            <input
              className="form-control"
              value={this.state.newTodo}
              onChange={this.updateValue}
            />
            <button
              type="button"
              className="btn btn-primary"
              onClick={this.newTodo}
            >
              Add
            </button>
          </div>

          {/* TABLE */}
          <div className="col-12">
            <table className="table">
              <thead>
                <tr>
                  <th>Task</th>
                  <th>Complete</th>
                </tr>
              </thead>
              <tbody>{this.todoRows()}</tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
