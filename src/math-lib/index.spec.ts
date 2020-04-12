import { expect } from 'chai';
import Fn from '.';

describe('add', () => {
  it('should add two numbers', () => {
    const sum = Fn.add(1, 6);
    expect(sum).equals(7);
  });
});

describe('subtract', () => {
  it('should subtract two numbers', () => {
    const sum = Fn.subtract(1, 6);
    expect(sum).equals(-5);
  });
  it('should return first number when second number is skipped', () => {
    const sum = Fn.subtract(1);
    expect(sum).equals(1);
  });
});
