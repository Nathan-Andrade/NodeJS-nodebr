const { deepEqual, ok } = require('assert');

const database = require('./database');
const DEFAULT_REGISTER_ITEM = {
  name: 'Flash',
  power: 'Speed',
  id: 1
}

const DEFAULT_UPDATE_ITEM = {
  name: 'Lanterna Verde',
  power: 'Energia do anel',
  id: 2
}

describe('Suite de manipulação de herois', () => {
  before(async () =>{
    await database.register(DEFAULT_REGISTER_ITEM)
    await database.register(DEFAULT_UPDATE_ITEM)
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
  it('deve remover um heroi por id', async () => {
    const expected = true;
    const result = await database.remove(DEFAULT_REGISTER_ITEM.id)
    deepEqual(result, expected)
  })
  it('deve atualizar um herói pelo id', async () => {
    const expected ={ 
      ...DEFAULT_UPDATE_ITEM, 
      name: 'Batman',
      power: 'Dinheiro' 
    }
    const newData = {
      name: 'Batman',
      power: 'Dinheiro' 
    }
     await database.update(DEFAULT_UPDATE_ITEM.id, newData)
    const [result] = await database.list(DEFAULT_UPDATE_ITEM.id)

    deepEqual(result, expected)
  })
})