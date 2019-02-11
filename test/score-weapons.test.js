const test = QUnit.test;

import weaponScore from '../src/result/calculate/weaponScore.js';

QUnit.module('weapons score');
// initialized scorecard for each test run
let scorecard = null;
QUnit.testStart(function() {
    scorecard = { pirate: 0, ninja: 0, viking:0 };
});

test('add one to viking within scorecard when "axe" is received', function(assert) {
    const expected = { pirate: 0, ninja: 0, viking: 1 };
    let result = weaponScore('axe', scorecard);

    assert.deepEqual(result, expected);
});

test('add one to pirate within scorecard when "cutlass" is received', function(assert) {
    const expected = { pirate: 1, ninja: 0, viking: 0 };
    const result = weaponScore('cutlass', scorecard);

    assert.deepEqual(result, expected);
});

test('add one to ninja within scorecard when "shuriken" is received', function(assert) {
    const expected = { pirate: 0, ninja: 1, viking: 0 };
    let result = weaponScore('shuriken', scorecard);


    assert.deepEqual(result, expected);
});