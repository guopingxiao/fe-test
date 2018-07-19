const getRandom = require('../modules/getRandom')
const createModule = require('../modules/createModule')

jest.mock('getRandom')

describe('test createModule', () => {
  it('test module-100', () => {
    getRandom.__set__(100)
    const module = createModule('module')
    expect(module.id).toBe('module-100')
  })
})
