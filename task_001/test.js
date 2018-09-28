var app = require ('./app')
var assert = require('assert')

assert(app.solution(1, 3) == 4)
assert(app.solution(5, 9) == 14)
assert(app.solution(100, 500) == 600)

console.log('Done')
