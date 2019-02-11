const test = QUnit.test;

import calculateResult from '../src/result/calculate/calculate-result.js';



// calculate result function takes answers obj as argument

// call weaponScore function and pass answer and scorecard as arguments

// call rateScorecard function and pass scorecard as function;


test('', function(assert) {
    const answers = {
        weapon: 'axe'

    };

    const result = calculateResult(answers);
    const expected = 'Viking';

    assert.equal(result, expected);
});