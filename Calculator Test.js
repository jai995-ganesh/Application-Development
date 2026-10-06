const Calculator = require('./Calculator');

describe('Calculator', () => {

    test('divide 10 by 2', () => {
        const calculator = new Calculator();
        expect(calculator.divide(10, 2)).toBe(5);
    });

    test('divide 20 by 4', () => {
        const calculator = new Calculator();
        expect(calculator.divide(20, 4)).toBe(5);
    });

    test('multiply 5 by 4', () => {
        const calculator = new Calculator();
        expect(calculator.multiply(5, 4)).toBe(20);
    });

    test('multiply 10 by 3', () => {
        const calculator = new Calculator();
        expect(calculator.multiply(10, 3)).toBe(30);
    });

});