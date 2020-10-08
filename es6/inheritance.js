class A {
    abc() {
        return "vivek";
    }
}
class B extends A {
    bca() {
        let x = super.abc();
        console.log(x);
    }
}
const obj = new B;
obj.bca();