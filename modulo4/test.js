const { deepEqual, ok } = require('assert');

const database = require('./database');
const DEFAULT_REGISTER_ITEM = {
  name: 'Flash',
  power: 'Speed',
  id: 1
}

describe('Suite de manipulação de herois', () => {
  before(async () =>{
    await database.register(DEFAULT_REGISTER_ITEM)
  })

  it('deve pesquisar um heroi usando arquivos', async () => {
    const expected = DEFAULT_REGISTER_ITEM
    const [result] = await database.list(expected.id)
    
    deepEqual(result, expected)
  })
  it('deve cadastrar um heroi, usando arquivos', async () => {
    const expected = DEFAULT_REGISTER_ITEM
    const result = await database.register(DEFAULT_REGISTER_ITEM)
    const [actual] = await database.list(DEFAULT_REGISTER_ITEM.id)

    deepEqual(actual, expected)
  })
})