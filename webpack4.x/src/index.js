import '../src/style/index.css'
import '../src/style/index.scss'

function main() {
    console.log('HelloWorld+1');
    console.log("12");
}
main();
if (module.hot) {
    module.hot.accept();
}

class Demo {
    show() {
        console.log('this.Age:', this.Age);
    }
    get Age() {
        return this._age;
    }
    set Age(val) {
        this._age = val + 1
    }
}

let d = new Demo();
d.Age = 19;
d.show();

let [a, b, c] = [1, 2, 3];
console.log('a:', a);
console.log('b:', b);
console.log('c:', c);