test('test setup working', () => {
  expect(true).toBeTruthy()
})

test('testing array length', () => {
  const array = state.createArray(10)
  const actual = array.length
  const expected = 10
  expect(actual).toBe(expected)
})

test('testing array depth', () => {
  const array = state.createArray(10)
  const actual = array[0].length
  const expected = 10
  expect(actual).toBe(expected)
})

test('testing array internal count', () => {
  const array = state.testArray(10)
  const actual = state.countNeighbours(2,2,array)
  const expected = 2
  expect(actual).toBe(expected)
})



const state = require('./state')
          