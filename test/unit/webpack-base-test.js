
const accert = require('assert')

describe('webpack.base.js test case:', () => {

  const baseConfig = require('../../lib/webpack.base')

  console.log(baseConfig)
  it('entry', () => {
    // F:/code/webpack/code/my-project/builder-webpack/test/smoke/template/src/index/index.js
    accert.equal(baseConfig.entry.index, '../smoke/template/src/index/index.js')
    accert.equal(baseConfig.entry.search, '../smoke/template/src/search/index.js')
  })
})