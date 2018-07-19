// createModule.js
const getRandom = require('./getRandom')

module.exports = function createModule (name) {
  return {
    name,
    id: `${name}-${getRandom(10000)}`
  }
}
