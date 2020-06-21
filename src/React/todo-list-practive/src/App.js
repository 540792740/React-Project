import React, {Component} from 'react';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state={
        // Every time add a new item
        newItem:'',

        // Container list, save all record
        list:[]
    }
  }
  render() {
    return (
        <div>
            <div className='title'>Todo List</div>
            <div className='container'>
                <input type="text"
                       value={this.state.newItem}
                       className='inputText'
                       onChange={e => this.updateItem('newItem', e.target.value)}
                       placeholder='Add Item'/>
                <button className='btn'
                        onClick={() => this.addItems()}>+</button>
                <ul>
                    {this.state.list.map(item =>{return (
                        <li >
                            <button onClick={() => this.deleteItem()}>X</button>
                        </li>
                    )})}
                </ul>


            </div>
        </div>
    );
  }

    updateItem() {

    }

    addItems() {

    }

    deleteItem(){

    }
}

export default App;
