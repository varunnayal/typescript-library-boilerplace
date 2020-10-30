import { fun1, fun2, Sample } from '../src/index';
import { assert } from 'chai';

describe('Function call', () => {
    it('fun1', () => {
        assert(fun1() === 'Hello World!', 'fun1 failed');
    });

    it('fun2', () => {
        assert(fun2() === 'Hello World Again!', 'fun2 failed');
    });
});

describe('Sample Class', async () => {
    it('run', async () => {
        const data = await Sample.run();
        assert(data === 2, 'Sample.run failed');
    });
});
