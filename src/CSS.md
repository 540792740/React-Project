1. add under line: 
    * border-bottom:2px solid #d9d9d9; 
    * text-decoration: underline;

2. Mouse Hover icon change:
    * cursor: pointer;

3. Border None: 
```
    outline: none; 
    border: none; 
    background: none;
```

4. background change when hover:    <br>
```
    z-index: -1; => Set as Background 
    Background img should position:fixed;  <br>
    
    background-size: cover  -> resize to cover whole page
    background-image: linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.75));
    .btn:hover{background-position: right}
```

5. UpperCase Text   <br>
    `text-transform: uppercase;`
    
6. font-size: 3rem => 	Relative to font-size of the root element	<br>
     `container: 100vw: view Width ` <br>
     `100vh: view height`
    

7. Box model:
    * box-sizing: border-box
    * box-shadow: 0px 5px rgba(0, 0, 0, 0.2);
    
8.css selector: *{} => select all element <br>

9. overflow:
```
    Visible: default
    hidden: hide overflow data
    scroll: scroll data
```

10. Background:
```

```

11. container:  <br>
```
    grid-template-columns: repeat(2, 1fr);
    grid-gap :7rem;
    
```

12. btn: <br>
```
    1. .btn:hover{
           background-position: right;
       }


```

13. Grid model:
```
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-gap: 50px;
    padding: 10px;
```

14. * selector: select all element

15. transition/ transform:
```
    transition:
        transition: width 2s, height 4s
        transition-delay: 1s
        transition-duration: 1s
        transition-timing-function: linear/ease/ease-in/ease out
    transform: 
        transform: rotate(20deg);
        transform: skewY(20deg);
```
16. 
```
      
```

17. margin/padding:
`4 property: margin: top right bottom left`
`3 property: margin: top right&left bottom`
`2 property: margin: top&bottom right&left`
