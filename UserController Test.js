const UserController = require('./UserController');

describe('UserController', () => {

    test('should add a user', () => {
        const controller = new UserController();

        const user = {
            id: 1,
            name: 'John',
            email: 'john@example.com'
        };

        controller.add(user);

        expect(controller.findById(1)).toEqual(user);
    });

    test('should remove a user', () => {
        const controller = new UserController();

        const user = {
            id: 1,
            name: 'John',
            email: 'john@example.com'
        };

        controller.add(user);
        controller.remove(1);

        expect(controller.findById(1)).toBeUndefined();
    });

    test('should find user by email', () => {
        const controller = new UserController();

        const user = {
            id: 1,
            name: 'John',
            email: 'john@example.com'
        };

        controller.add(user);

        expect(controller.findByEmail('john@example.com')).toEqual(user);
    });

    test('should return undefined for unknown email', () => {
        const controller = new UserController();

        expect(controller.findByEmail('unknown@example.com')).toBeUndefined();
    });

    test('should find user by id', () => {
        const controller = new UserController();

        const user = {
            id: 1,
            name: 'John',
            email: 'john@example.com'
        };

        controller.add(user);

        expect(controller.findById(1)).toEqual(user);
    });

    test('should return undefined for unknown id', () => {
        const controller = new UserController();

        expect(controller.findById(999)).toBeUndefined();
    });

});