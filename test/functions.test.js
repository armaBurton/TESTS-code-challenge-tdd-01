// IMPORT MODULES under test here:
import { 
    addExclamationPoints,
    multiplyBySeven,
    multiplyBy12ThenHalve,
    divideThenMultiply,
    returnAsAnArray,
    returnAsAString,
    makeLuckyGreeting,
    getSecondItem,
    getLastItem,
    getRandomNumber
} from '../functions.js';

const { test, skip } = QUnit;

test('This test should add "!!!" to the end of a string', (expect) => {
    const expected1 = `puppy!!!`;
    const actual1 = addExclamationPoints(`puppy`);
    expect.equal(actual1, expected1);

    const expected2 = `pizza!!!`;
    const actual2 = addExclamationPoints(`pizza`);
    expect.equal(actual2, expected2);

    const expected3 = `Yon Yonson!!!`;
    const actual3 = addExclamationPoints(`Yon Yonson`);
    expect.equal(actual3, expected3);
});

test('this test should return (num * 7)', (expect) => {
    const expected1 = 3615605;
    const actual1 = multiplyBySeven(516515);
    expect.equal(actual1, expected1);

    const expected2 = 35;
    const actual2 = multiplyBySeven(5);
    expect.equal(actual2, expected2);

    const expected3 = 13013;
    const actual3 = multiplyBySeven(1859);
    expect.equal(actual3, expected3);
});

test('this test should return ((num * 7) / 2 )', (expect) => {
    const expected1 = 12;
    const actual1 = multiplyBy12ThenHalve(2);
    expect.equal(actual1, expected1);

    const expected2 = 90;
    const actual2 = multiplyBy12ThenHalve(15);
    expect.equal(actual2, expected2);

    const expected3 = 78078;
    const actual3 = multiplyBy12ThenHalve(13013);
    expect.equal(actual3, expected3);
});

test('this test should return ((firstNumber / secondNumber) * thirdNumber)', (expect) => {
    const expected1 = 70070;
    const actual1 = divideThenMultiply(13013, 13, 70);
    expect.equal(actual1, expected1);

    const expected2 = 2999999997;
    const actual2 = divideThenMultiply(999999999, 3, 9);
    expect.equal(actual2, expected2);

    const expected3 = 50;
    const actual3 = divideThenMultiply(50, 50, 50);
    expect.equal(actual3, expected3);
});

test('This function should take in three numbers and return those numbers in an array', (expect) => {
    const expected1 = [13013, 13, 70];
    const actual1 = returnAsAnArray(13013, 13, 70);
    expect.deepEqual(actual1, expected1);

    const expected2 = [999999999, 3, 9];
    const actual2 = returnAsAnArray(999999999, 3, 9);
    expect.deepEqual(actual2, expected2);

    const expected3 = [`poop`, `pee`, `fart`];
    const actual3 = returnAsAnArray(`poop`, `pee`, `fart`);
    expect.deepEqual(actual3, expected3);
});

test('This function should take in three numbers and return those numbers mushed together as a string', (expect) => {
    const expected1 = '130131370';
    const actual1 = returnAsAString(13013, 13, 70);
    expect.equal(actual1, expected1);

    const expected2 = `99999999939`;
    const actual2 = returnAsAString(999999999, 3, 9);
    expect.equal(actual2, expected2);

    const expected3 = `505050`;
    const actual3 = returnAsAString(50, 50, 50);
    expect.equal(actual3, expected3);
});

test(`This function should take in two numbers and return a greeting announcing that the sum of those numbers is today's lucky number`, (expect) => {
    const expected1 = `Today's lucky number is: 13013!`;
    const actual1 = makeLuckyGreeting(13000, 13);
    expect.equal(actual1, expected1);

    const expected2 = `Today's lucky number is: 999999999!`;
    const actual2 = makeLuckyGreeting(999999996, 3);
    expect.equal(actual2, expected2);

    const expected3 = `Today's lucky number is: 100!`;
    const actual3 = makeLuckyGreeting(50, 50);
    expect.equal(actual3, expected3);
});

test(`This function should take an array and return the second item in the array`, (expect) => {
    const expected1 = 2;
    const actual1 = getSecondItem([1, 2, 3]);
    expect.equal(actual1, expected1);

    const expected2 = 30;
    const actual2 = getSecondItem([1, 30, 13]);
    expect.equal(actual2, expected2);

    const expected3 = 3;
    const actual3 = getSecondItem([1, 3, 0, 1, 3]);
    expect.equal(actual3, expected3);
});

test(`This function should take an array and return the second item in the array`, (expect) => {
    const expected1 = 2;
    const actual1 = getSecondItem([1, 2, 3]);
    expect.equal(actual1, expected1);

    const expected2 = 30;
    const actual2 = getSecondItem([1, 30, 13]);
    expect.equal(actual2, expected2);

    const expected3 = 3;
    const actual3 = getSecondItem([1, 3, 0, 1, 3]);
    expect.equal(actual3, expected3);
});

test(`This function should take an array and return the LAST item in the array, no matter the array's length`, (expect) => {
    const expected1 = 1;
    const actual1 = getLastItem([1]);
    expect.equal(actual1, expected1);

    const expected2 = 13;
    const actual2 = getLastItem([1, 30, 13]);
    expect.equal(actual2, expected2);

    const expected3 = 3;
    const actual3 = getLastItem([1, 3, 0, 1, 3]);
    expect.equal(actual3, expected3);
});

test(` This function should make a random number between 0 and 5.`, (expect) => {
    const expected1 = true;
    const actual1 = getRandomNumber();
    expect.equal(actual1, expected1);

    const expected2 = true;
    const actual2 = getRandomNumber();
    expect.equal(actual2, expected2);

    const expected3 = true;
    const actual3 = getRandomNumber();
    expect.equal(actual3, expected3);
});


skip('this test should be skipped', (expect) => {
    const expected = true;

    const actual = true;

    expect.equal(actual, expected);
});

