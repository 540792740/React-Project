import React, {Component} from 'react';
import '../App.css'
import Storage from '../model/storage'


class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state={
            username:'',
            list:[
                {title:'Recording Node.js', checked: true},
                {title:'Recording Express.js', checked: false},
                {title:'Recording React.js', checked: true},
                {title:'Recording AJAX', checked: false},
            ]

        }
    }
    // LifeCycle, load page then run function
    componentDidMount() {
        // Fetch list
        // var list = JSON.parse(localStorage.getItem('todoList'))
        var list = Storage.get("todoList")
        if(list){
            this.setState({
                list:list
            })
        }

    }


    render() {
        return (
            <div>
                <header className='title'>
                    TodoList:   <input type="text"
                                       onChange={(e)=>{this.inputHandler(e)}}
                                       onKeyUp={(e) => this.addData(e)}
                /></header>
                <br/><hr/><br/>
                <h2>In Processing</h2>
                <ul>
                    {this.state.list.map((value, key)=>{
                        if(!value.checked){
                            return(
                                <li key={key}>
                                    <input type="checkbox"
                                           checked={value.checked}
                                           onChange={this.checkboxChange.bind(this, key, value.checked)}
                                    />
                                    {value.title}
                                    ---- <button onClick={() =>{this.removeData(key)}}>Delete</button>
                                </li>
                            )
                        }

                    })}
                </ul>
                <h2>Finished</h2>
                <ul>
                    {this.state.list.map((value, key)=>{
                        if(value.checked){
                            return(
                                <li key={key}>
                                    <input type="checkbox"
                                           checked={value.checked}
                                           onChange={() => this.checkboxChange(key)}
                                    />
                                    {value.title}
                                    ---- <button onClick={() =>{this.removeData(key)}}>Delete</button>
                                </li>
                            )
                        }

                    })}
                </ul>
            </div>
        );
    }

    // bind input
    inputHandler(e) {
        this.setState({
            username:e.target.value
        })
    }


    addData(e) {
        if (e.keyCode === 13) {
            let title = this.state.username;
            let tempList = [...this.state.list];

            tempList.push({
                title: title,
                checked: false
            })

            // Set State
            this.setState({

                // clear username string
                username: '',
                list: tempList
            })

            // Clear input
            e.target.value = ''

            //Save cache
            // localStorage.setItem("todoList", JSON.stringify(tempList));
            Storage.set('todoList', tempList)
        }
    }
//
    checkboxChange (key){
        let tempList = this.state.list

        tempList[key].checked = !tempList[key].checked;
        // tempList[key].ckecked = !tempList[key].ckecked;

        this.setState({
            list:tempList
        })

        //Save cache
        // localStorage.setItem("todoList", JSON.stringify(tempList));
        Storage.set('todoList', tempList)
    }
    removeData(key){
        var tempList = this.state.list;
        tempList.splice(key, 1);
        this.setState({
            list:tempList
        })
        //Save cache
        // localStorage.setItem("todoList", JSON.stringify(temp));
        Storage.set('todoList', tempList)

    }


}

export default TodoList;
