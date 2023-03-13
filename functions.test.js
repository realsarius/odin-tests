/* eslint-disable @typescript-eslint/no-var-requires */
const functions = require('./functions');

// beforeEach(() => initDatabase());
// afterEach(() => closeDatabase());

// beforeAll(() => initDatabase());
// afterAll(() => closeDatabase());

// const initDatabase = () => console.log('Database Initialized...');
// const closeDatabase = () => console.log('Database closed...');

const nameCheck = () => console.log('Checking Name...');

describe('Checking Names', () => {
  beforeEach(() => nameCheck());

  test('User is Jeff', () => {
    const user = 'Jeff';
    expect(user).toBe('Jeff');
  });

  test('User is Karen', () => {
    const user = 'Karen';
    expect(user).toBe('Karen');
  });
});

test('adds 2 + 2 to equal 4', () => {
  expect(functions.add(2, 2)).toBe(4);
  expect(functions.add(2, 2)).not.toBe(5);
  expect(functions.add(2, 2)).toBeTruthy();
  expect(functions.add(2, 2)).not.toBeFalsy();
  expect(functions.add(2, 2)).not.toBeUndefined();
});

test('should be null', () => {
  expect(functions.isNull()).toBeNull();
});

test('should be falsy', () => {
  expect(functions.checkValue(undefined)).toBeFalsy();
});

test('user should be Berkan Sozer object', () => {
  expect(functions.createUser()).toEqual({
    firstName: 'Berkan',
    lastName: 'Sozer',
  });
});

test('should be under 1600', () => {
  const load1 = 800;
  const load2 = 700;

  expect(load1 + load2).toBeLessThan(1600);
});

test('There is no I in team', () => {
  expect('teami').not.toMatch(/I/);
});

test('admin should be in usernames', () => {
  const usernames = ['john', 'karen', 'admin'];
  expect(usernames).toContain('admin');
});

// test('user fetched name should be Leanne Graham ', () => {
//   expect.assertions(1);
//   return functions.fetchUser().then((data) => {
//     expect(data.name).toEqual('Leanne Graham');
//   });
// });

// Async & Await way
// test('user fetched name should be Leanne Graham ', async () => {
//   expect.assertions(1);
//   const data = await functions.fetchUser();
//   expect(data.name).toEqual('Leanne Graham');
// });
