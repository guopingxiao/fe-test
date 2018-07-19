
const mockFn = jest.fn()

function getDouble (val, callback) {
  if (val < 0) {
    return
  }
  setTimeout(() => {
    callback(val * val)
  }, 100)
};

/**
 * 以上的断言基本是用在测试同步函数的返回值，如果所测试的函数存在异步逻辑。
 * 那么在测试时就应该利用 jest 的 mock function 来进行测试。通过 mock function
 * 可以轻松地得到回调函数的调用次数、参数等调用信息，而不需要编写额外的代码去获取相关数据，
 * 让测试用例变得更可读。
 */

describe('======= mock 能力 =======', () => {
  test('test mock', () => {
    getDouble(10, mockFn)

    expect(mockFn).not.toHaveBeenCalled()
    setTimeout(() => {
      expect(mockFn).toHaveBeenCalledTimes(1)
      expect(mockFn).toHaveBeenCalledWith(20)
    }, 110)
  })
})

