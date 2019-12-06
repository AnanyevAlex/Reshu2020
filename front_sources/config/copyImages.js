const path = require('path')
const ncp = require('ncp').ncp

const src = path.resolve(__dirname, '../src')
const dist = path.resolve(__dirname, '../dist/template/resources')

function copyImages () {
  ncp(`${src}/images`, `${dist}/images`, (err) => {
    if (err) throw err

    console.log('All done!')
  })
}

module.exports = copyImages