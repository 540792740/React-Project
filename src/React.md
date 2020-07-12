#### Component:
* First Character of name should be **Capital**

#### 'props' in constructor and super
* used for transform value between the father and child.

#### Image
*  `import  logo from './image/a.jpg'` <br>
    `<img src={logo}/>`

#### Start:
```
    1. npx create-react-app my-app

```
#### Radium:
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

#### prop
```
const Person = (prop) => {
    {prop.children}
}
    
```

#### Redux
```
    npm install redux react-redux -s
```

#### Save or Get localhost value
```
    Save:   localStorage.setItem("todoList", straightify(tempList))
    Get:    var list = JSON.parse(localStorage.getItem('todoList'))
```

#### Transform between Parent C and Child C
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

#### ref
```
    this.userNameRef = React.createRef()
    <input type="text" ref={this.userNameRef} />
```

#### React fetch API
```
    1. axios
        npm install axios
         import axios from 'axios
        must use arrow function in callback response.
    2. fetch-jsonp
        npm install fetch-jsonp
        import FetchJsonp from 'fetch-jsonp'
        

```
#### LifeCycle:
```
    componentWillMount, render, componentDidMount(DOM)
    componentWillUpdate, render, componentDidUpdate
```
#### Router
```
    1. react-router-dom: BrowserRouter as Router, Switch, Route, Link
    2. Page redirect:
        a> get 
        b> Dynamic Router
            
        c> LocalStorage
```

#### url API
```
    console.log(url.parse(this.props.location.search, true).query)
```

#### Import Image
    `<img src={require('../assert/images/1.jpg')}/>`

#### prop-types API
```
    1. isRequired: no prop 'text' will warning!
                    none string will also warning but render sucssfully
        
            static propTypes={
                text:PropType.string.isRequired
            }
        
        Default:
            static defaultProps = {text:'abc'}

```
