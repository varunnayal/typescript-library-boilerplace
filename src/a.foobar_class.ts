class FooBar {
    a: number;
    static Baz(): void {
        return;
    }
    constructor() {
        this.a = 1;
    }
    myFunc(): void {
        return;
    }
    myBoundFunc = (): void => undefined;
}

export default FooBar;
