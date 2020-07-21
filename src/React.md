#### 1. Component:
* First Character of name should be **Capital**

#### 2. 'props' in constructor and super
* used for transform value between the father and child.

#### 3. Image
*  `import  logo from './image/a.jpg'` <br>
    `<img src={logo}/>`

#### 4. Start:
```
    1. npx create-react-app my-app
```
#### 5. Radium:
```
    1. import Radium, {StyleRoot} from "radium";
    2. Radium(app)
    3. <StyleRoot>
            Coding ... 
       </StyleRoot>
    4. 
        ':hover' : {
                backgroundColor:'pink',
                color: '#66d266'
            }
        style[':hover'] = {
                        backgroundColor:'rgba(156,78,205,0.84)'
                    }
```

#### 6. prop
```
const Person = (prop) => {
    {prop.children}
}
```

#### 7. Redux
```
    npm install redux react-redux -s
```

#### 8. Save or Get localhost value
```
    Save:   localStorage.setItem("todoList", straightify(tempList))
    Get:    var list = JSON.parse(localStorage.getItem('todoList'))
```

#### 9. Transform between Parent C and Child C
```
     a> <Header run={this.run} 
             title={this.state.title}        
             news={this} />
        1. Pass Function: 
                child: <button onClick={this.props.run}/>
        2. title pass the data => {this.props.title}
        3. news, pass the whole parent Component => {this.props.news.xxx}
     
     b> Fetch child function and data:
        parent:
            <button onClick={() => this.getFooter()}>Get Footer Component</button>
            <Footer ref={this.myRef}/>
            getFooter(){ 
                this.myRef.current.run      => get function
                alert(this.myRef.current.state.msg)     => get Data
            }
        Child: 
            run = () =>{}
            i> Header.defaultProps = {}  => default props when no data pass from parent
            ii> PropTypes:
                import PropTypes from 'prop-types'
                Header.propTypes={title: PropTypes.string} 
```

#### 10. ref
```
    this.userNameRef = React.createRef()
    <input type="text" ref={this.userNameRef} />
```

#### 11. React fetch API
```
    1. axios
        npm install axios
         import axios from 'axios
        must use arrow function in callback response.
    2. fetch-jsonp
        npm install fetch-jsonp
        import FetchJsonp from 'fetch-jsonp'
```

#### 13. Router
```
    1. react-router-dom: BrowserRouter as Router, Switch, Route, Link
    2. Page redirect:
        a> get 
        b> Dynamic Router
        c> LocalStorage
    3.  NavLink and Link:
            NavLink: Cna be render with activeClassName, activeStyle, exact, isActive
            Link: jump to another page
    4. <Redirect> : deal with 404, at the end of router
        <NavLink to="/a/man"
            activeStyle={{color:'#4dc060'}}
            activeClassName={'selected'} > Style of Male</NavLink>
```

#### 14. url API
```
    console.log(url.parse(this.props.location.search, true).query)
```

#### 15. Import Image
    `<img src={require('../assert/images/1.jpg')}/>`

#### 16. prop-types API. setting type of Props
```
    1. isRequired: no prop 'text' will warning!
                    none string will also warning but render sucssfully
        
            static propTypes={
                text:PropType.string.isRequired
            }
        
        Default:
            static defaultProps = {text:'abc'}

```

#### 17. app.js has one more child component: map
    Can avoid null or undefined compared with this.props.children.
    {React.Children.map(children, (child)=>child)}

####18. History
```
    In Child component: 
        button: goBack(){ this.props.history.goBack(); }
        button: goForward(){ this.props.history.goForward(); }
```

#### window.location:
```
    renderByHash(){
            this.state.filter = window.location.hash;
            window.addEventListener('hashchange', ()=>{
                this.state.filter = window.location.hash;
                this.setState({})
            }) 
        }
```
#### Date Generate:
```
    <div className='date'>{dataBuilder(new Date())}</div>
    const dataBuilder = (d)=>{
        let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        
        let day = days[d.getDay()];
        let date = d.getDate();
        let month = months[d.getMonth()];
        let year = d.getFullYear();
        return `${day} ${date} ${month} ${year}`
    }
```

