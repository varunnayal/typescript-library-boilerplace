import _FoobarClass from './a.foobar_class';
import _AsyncAwait from './b.async_await';
import _ArrowFn from './c.arrow_fn';
import _RestParams from './d.rest_params';
import _Destruct from './e.destruct';

// export FoobarClass;

export function fun1(): string {
    return 'Hello World!';
}

export function fun2(): string {
    return 'Hello World Again!';
}

export class Sample {
    static async run(): Promise<number> {
        return 2;
    }
}

export const FoobarClass = _FoobarClass;
export const AsyncAwait = _AsyncAwait;
export const ArrowFn = _ArrowFn;
export const RestParams = _RestParams;
export const Destruct = _Destruct;
