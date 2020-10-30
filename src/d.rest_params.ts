export default function x(...args: string[]): void {
    args.forEach((arg) => process.stdout.write(`${arg}`));
}
