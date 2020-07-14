import React, {Component} from 'react';
import './css/index.css';



function convertClass(obj){
    let classStr = '';
    for(let key in obj){
        if(obj[key]) classStr += key + ' ';
    }
    return classStr;
}

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
            editingId: -1,
            leftNum:0,
            toggleAll: false,

        }
        this.todoRef = React.createRef();
  }
      renderList(){
          let {todos, editingId} = this.state;
          return todos.map(todo=>{
              return(
                  <li key={todo.id}
                      className={convertClass({
                          completed:todo.isCompleted,
                          editing:editingId === todo.id
                      })}>
                    <div className="view">
                      <input className="toggle"
                             type="checkbox"
                             checked={todo.isCompleted}
                             onChange={e=>this.checkBoxHandler(e, todo)}
                      />
                      <label onDoubleClick={() => this.editHandler(todo)}>{todo.content}</label>
                      <button className="destroy"
                              onClick={(e)=>this.delTodo(e)}
                      ></button>
                    </div>
                      <form onSubmit={e => this.endEditing(e)}>
                          <input className="edit"
                                 value={todo.content}
                                 ref={this.todoRef}
                                 onChange={e => this.saveEdit(e, todo)}
                                 onBlur={(e)=>this.endEditing(e)}
                          />
                      </form>
                  </li>
              )
          })
      }

      valueHandler(e){
        this.setState({
          newContent: e.target.value
        })
      }
    saveEdit(e, todo){
        todo.content = e.target.value;
        this.setState({})
    }
      formHandler(e){
            e.preventDefault();
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
          this.computedLeftCount();

      }

      delTodo(todo){
          let {todos} = this.state;
          let index = todos.findIndex(t => t.id === todo.id)
          todos.splice(index, 1);
          this.computedLeftCount();
        }

        checkBoxHandler(e, todo){
            todo.isCompleted = e.target.checked;
            this.computedLeftCount();
        }
        editHandler(todo){
            this.setState({
                editingId: todo.id
            }, ()=>{
                this.todoRef.current.focus();
            })
            this.computedLeftCount();
        }
        endEditing(e){
            e.preventDefault();
            this.setState({
                editingId:-1,
            });
        }
        computedLeftCount(){
            let num  = 0;
            let toggleAllChecked = true;
            this.state.todos.map(todo =>{
                if(!todo.isCompleted) {
                    num++;
                    toggleAllChecked = false
                }
                //Function toggleAll changed
                // one unchecked, icon will turn off


            })
            this.setState({
                leftNum:num,
                toggleAll:toggleAllChecked,
            })
        }
    componentDidMount() {
        this.computedLeftCount();
    }
    //Checked all or not
    toggleAllHandler(e){
        let {checked} = e.target;
        this.state.todos.forEach(todo=>{
            todo.isCompleted = checked;
        })
        this.setState({
            toggleAll: checked
        })
    }

    render() {
    let {newContent, toggleAll} = this.state
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
              <input id="toggle-all"
                     className="toggle-all"
                     onChange={(e)=> this.toggleAllHandler(e)}
                     checked={toggleAll}
                     type="checkbox"/>
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
              <span className="todo-count"><strong>{this.state.leftNum}</strong> item left</span>
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
