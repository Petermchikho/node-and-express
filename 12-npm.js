//npm - global command 
// npm init
// npm init -y
// npm install lodash
// npm install nodemon -D
// npm install -g nodemon 

const _ = require('lodash')

const items=[1,[2,[3,[4]]]]
const newItems=_.flattenDeep(items)
console.log(newItems)