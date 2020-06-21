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
                       onChange={e => this.updateItem(e.target.value)}
                       placeholder='Add Item'/>
                <button className='btn btn-add'
                        onClick={() => this.addItems()}>+</button>
                <ul>
                    {this.state.list.map(item =>{return (
                        <li className='item' key={item.id}>
                            {item.value}
                            <button className="btn btn-delete"
                                    onClick={() => this.deleteItem(item.id)}>
                                x
                            </button>
                        </li>
                    )})}
                </ul>
            </div>
        </div>
    );
  }
    updateItem( value) {
        this.setState({
            ['newItem']: value
        });
  }

    addItems() {
        const newItem = {
            id:  Math.random(),
            value : this.state.newItem
        }
        // copy list
        var list = [...this.state.list];

        list.push(newItem)

        // Renew State
        this.setState({
            newItem:'',
            list,
        })
    }

    deleteItem(item){
        // copy list
        var list = [...this.state.list];

        var updateList = list.filter(temp => temp.id !== item)

        this.setState({
            list:updateList,
        })
  }
}

export default App;
