var app = require ('./app')
var assert = require('assert')

assert(app.solution([9, 5, 7, 10, 2]) == 2)
assert(app.solution([22, 25, 12, 100, 33]) == 3)
assert(app.solution([523, 123, 17, 600, 605]) == 5)
assert(app.solution([523, 123, 17, 600, 605, 400, 900]) == 5)
assert(app.solution([523, 123, 17, 200, 605, 400, 900]) == 106)

console.log('Done')
