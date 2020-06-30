

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

#### Pass data from Parent C to Child Component
```
     <Header run={this.run} title={this.state.title} news={this}
        1. title pass the data => this.props.title
        2. news, pass the whole parent Component => this.props.news.xxx
```

#### ref
```


```
