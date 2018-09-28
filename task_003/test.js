var app = require ('./app')
var assert = require('assert')

assert(app.solution("1 15 8") == 15)
assert(app.solution("20 30 40") == 40)
assert(app.solution("345 600 12 532") == 600)
assert(app.solution("845 600 12 532") == 845)
assert(app.solution("845 600 12 7532") == 7532)
assert(app.solution("32845 600 12 7532") == 32845)
assert(app.solution("32845 600 12 7532 234 34 52345 2345 2345 23452 345 435555") == 435555)

console.log('Done')
