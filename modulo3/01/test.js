const assert = require('assert');
const { getPeople } = require('./service');

describe('Satr Wars Tests', function() {
  it('deve buscar o r2d2 com o formato correto', async () => {
    const expected = [{ nome: 'R2-D2', peso: '96' }]
    const baseName = `r2-d2`
    const result = await getPeople(baseName)

    assert.deepEqual(result, expected)
  })
})