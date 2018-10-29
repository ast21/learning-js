const test = require('../script');

let sum = test.sum,
    num = test.num,
    each = test.each,
    arr2 = test.arr2,
    myFunc = test.myFunc;

let assert = require('chai').assert;

describe('test', () => {
    it('function -sum()- return is "boolean"?', () => {
        assert.typeOf(sum(), 'boolean');
    });
    it('variable -num- return is 5 and "number"?', () => {
        assert.equal(num, 5);
    });
    it('function -each()- return is "array" and values [ 8, 7, 6, 5, 4 ]?', () => {
        assert.typeOf(each(arr2, myFunc), 'array');
        assert.isArray(each(arr2, myFunc));
        assert.sameOrderedMembers(each(arr2, myFunc), [ 8, 7, 6, 5, 4 ]);
        assert.lengthOf(each(arr2, myFunc), 5);
        assert.equal(each(arr2, myFunc).length, 5);
    });
});
