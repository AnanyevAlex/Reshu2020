import './style'
import './app'

if (process.env.NODE_ENV === 'development') {
  pages.forEach(page => {
    require(`./pages/${page}.pug`)
  })
}

var svg4everybody = require('svg4everybody/dist/svg4everybody.min.js')
svg4everybody()