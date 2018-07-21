function getDouble (val, callback) {
  if (val < 0) {
    return
  }
  setTimeout(() => {
    callback(val * val)
  }, 10000)
};

jest.useFakeTimers()
const mockFn = jest.fn()
getDouble(10, mockFn)

describe('======= 测试timers =======', () => {
  it('test timers', () => {
    expect(mockFn).not.toHaveBeenCalled()
    jest.runAllTimers()
    expect(mockFn).toHaveBeenCalledTimes(1)
    expect(mockFn).toHaveBeenCalledWith(100)
    jest.useRealTimers()
  })
})

/**
 * 去抖函数
 * @param {*} fn
 * @param {*} waitTime
 */
function debounce (fn, waitTime) {
  let timestamp = null
  let timer = null
  let context
  return function (...args) {
    timestamp = +new Date()
    context = this
    function later () {
      const last = (+new Date()) - timestamp
      if (last > 0 && last < waitTime) {
        clearTimeout(timer)
        timer = setTimeout(later, waitTime - last)
      } else {
        fn.call(context, ...args)
        clearTimeout(timer)
      }
    }
    if (!timer) {
      timer = setTimeout(later, waitTime)
    }
  }
}

describe('=======debounce function====', () => {
  it('should be called after 100 ms', () => {
    const mockFn = jest.fn()
    const run = debounce(mockFn, 100)
    jest.useFakeTimers()

    run()

    jest.runTimersToTime(50)   // 第 50 ms
    run()
    expect(mockFn).not.toHaveBeenCalled()

    jest.runTimersToTime(50)   // 第 100 ms
    expect(mockFn).not.toHaveBeenCalled()

    jest.runTimersToTime(50)   // 第 150 ms
    expect(mockFn).toHaveBeenCalledTime(1)

    jest.useRealTimers()
  })
})

