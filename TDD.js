test('divide by zero should throw an error', () => {
    const calculator = new Calculator();

    expect(() => calculator.divide(10, 0))
        .toThrow('Cannot divide by zero');
});



divide(a, b) {
    if (b === 0) {
        throw new Error('Cannot divide by zero');
    }

    return a / b;
}