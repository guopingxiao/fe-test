jest.mock('../modules/getRandom')
const getRandom = require('../modules/getRandom')
const createModule = require('../modules/createModule')

describe('test mock', function () {
  it('test', function () {
    getRandom.__set(100)
    const module = createModule('module')
    expect(module.id).toBe('module-100')
  })
})

