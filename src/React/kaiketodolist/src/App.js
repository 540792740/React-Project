import React, {Component} from 'react';
import './css/index.css';

class App extends Component{
  constructor(props) {
    super(props);
    this.state={
      todos:[
        {id:1, isCompleted: true, content:'Eating'},
        {id:2, isCompleted: false, content:'Sleeping'},
        {id:3, isCompleted: true, content:'Playing'},
      ],
      newContent:'',

    }
  }
  renderList(){
      let {todos} = this.state;
      return todos.map(todo=>{
          return(
              <li key={todo.id}>
                <div className="view">
                  <input className="toggle"
                         type="checkbox"
                         checked={todo.isCompleted}/>
                  <label>{todo.content}</label>
                  <button className="destroy"></button>
                </div>
                <input className="edit" value="Rule the web"/>
              </li>
          )
      })
  }

  valueHandler(e){
    this.setState({
      newContent: e.target.value
    })
  }
  formHandler(e){

  }
  addTodo(e){
      let maxId = -1;
      this.state.todos.forEach( todo => {
        if(todo.id > maxId) maxId = todo.id;
      })
      maxId++;
      this.state.todos.push({
        id:maxId,
        isCompleted: false,
        content: this.state.newContent,
      })
    this.setState({
      newContent : ''
    })


  }

  render() {
    let {newContent} = this.state
    return (
        <React.Fragment>
          <section className="todoapp">
            <header className="header">
              <h1>todos</h1>
              <form onSubmit={(e)=>this.formHandler(e)}>
                <input className="new-todo"
                       placeholder="What needs to be done?"
                       autoFocus
                       value={newContent}
                       onChange={(e) => this.valueHandler(e)}
                       onBlur={(e)=>{this.addTodo()}}
                />
              </form>
            </header>
            {/* This section should be hidden by default and shown when there are todos */}
            <section className="main">
              <input id="toggle-all" className="toggle-all" type="checkbox"/>
              <label htmlFor="toggle-all">Mark all as complete</label>
              <ul className="todo-list">
                {/* These are here just to show the structure of the list items */}
                {/* List items should get the class `editing` when editing and `completed` when marked as completed */}
                {this.renderList()}
              </ul>
            </section>
            {/* This footer should hidden by default and shown when there are todos */}
            <footer className="footer">
              {/* This should be `0 items left` by default */}
              <span className="todo-count"><strong>0</strong> item left</span>
              {/* Remove this if you don't implement routing */}
              <ul className="filters">
                <li>
                  <a className="selected" href="#/">All</a>
                </li>
                <li>
                  <a href="#/active">Active</a>
                </li>
                <li>
                  <a href="#/completed">Completed</a>
                </li>
              </ul>
              {/*Hidden if no completed items are left ↓ */}
              <button className="clear-completed">Clear completed</button>
            </footer>
          </section>
          <footer className="info">
            <p>Double-click to edit a todo</p>
            {/* Remove the below line ↓ */}
            <p>Template by <a href="http://sindresorhus.com">Sindre Sorhus</a></p>
            {/* Change this out with your name and url ↓ */}
            <p>Created by <a href="http://todomvc.com">you</a></p>
            <p>Part of <a href="http://todomvc.com">TodoMVC</a></p>
          </footer>
        </React.Fragment>
    );
  }
}
export default App;
