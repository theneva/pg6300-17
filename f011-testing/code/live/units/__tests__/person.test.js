const sayHi = require('../person');

describe('Person works', () => {
    it('says hi', () => {
        const actual = sayHi();
        const expected = 'Hi!';
        expect(actual).toEqual(expected);
    });

    it('lol', () => {
        expect('hello').toBeTruthy();
    });
});
