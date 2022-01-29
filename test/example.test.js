// IMPORT MODULES under test here:
import { createStatsString } from '../createstatstring.js';

const test = QUnit.test;

test('time to test a function', (expect) => {

    createStatsString();
    //Arrange
    // Set up your arguments and expectations
    const expected = `You've selected 1 landmark(s), 2 restaurant(s), and 3 place(s).`;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = createStatsString(1, 2, 3);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});


