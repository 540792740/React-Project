class Person{
    constructor(props) {
        this.age = 10;
        console.log('In Person')

    }
}

class Boy extends Person{
    constructor(props) {
        super(props);
        this.name = props.name
        console.log('In Boy')
    }
}

let p = new Boy({name:'Mike', age:18})
console.log(p)
