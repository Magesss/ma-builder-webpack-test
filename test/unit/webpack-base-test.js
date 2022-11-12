
const accert = require('assert')

describe('webpack.base.js test case:', () => {

  const baseConfig = require('../../lib/webpack.base')

  it('entry', () => {
    // F:/code/webpack/code/my-project/builder-webpack/test/smoke/template/src/index/index.js
    accert.equal(baseConfig.entry.index.indexOf('test/smoke/template/src/index/index.js') > -1, true)
    accert.equal(baseConfig.entry.search.indexOf('test/smoke/template/src/search/index.js') > -1, true)
  })
})