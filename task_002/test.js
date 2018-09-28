var app = require ('./app')
var assert = require('assert')

assert(app.solution([1, 2, 3]) == 6)
assert(app.solution([5, 3, 5, 1, 5, 10]) == 29)
assert(app.solution([100, 500]) == 600)

console.log('Done')
