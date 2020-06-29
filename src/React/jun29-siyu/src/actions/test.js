text = (a, b) =>{return (a * b) + a + b}

console.log(text(1, 2))

var ch1 = 'b'
var ch2
switch (ch1) {
    case 'b':
        ch2='2'
}
console.log(ch2)


//
function test() {
    this.prop1 = 'a'
}

var a = new test();
test.prototype.prop1 = 'b'
console.log(a.prop1)

console.log('1' + 2)


class Em{
    constructor(fn, ln) {
        this.fn = fn;
        this.ln = ln;
    }
    getFullName(){
        return this.fn + ''
    }
}

class M{
    constructor(fn, ln, staff) {
        this.fn = fn
        this.ln = ln
        this.staff = staff;
    }

    displ(){
        console.log(this.getFullName() + this.staff)
    }
}

var mg = new M('J', "D", 5)
mg.displ()
