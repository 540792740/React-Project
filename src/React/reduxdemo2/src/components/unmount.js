class LinkedList{
    constructor(left, right) {
        this.left = left;
        this.right = right;
    }
}

let a = [1,2,3,4,5,6]
a.splice(2, 1, 'apple')
console.log(a)

a = [1,2,3,4,5,6]
a = a.slice(1,2) //[)
console.log(a)
