
describe('=======test async =======', () => {
  test('test callback', (done) => {
    function callback(data) {
      expect(data).toBe('peanut buffer'); // 这里没有执行到
      done()
    }
    fetchData(callback);
  })
})


// 作者：Gping
// 链接：https://juejin.im/post/5b49b92751882536e51774bc