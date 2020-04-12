function add(a: number, b: number): number {
  return a + (b ?? 0);
}

const subtract = (a: number, b?: number): number => a - (b ?? 0);

export default {
  add,
  subtract,
};
