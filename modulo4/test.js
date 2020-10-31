const { deepEqual, ok } = require('assert');
const Database = require('./database');
const DEFAULT_REGISTER_ITEM = { name: 'Flash', power: 'speed', id: 1 };
const DEFAULT_UPDATE_ITEM = {
  name: 'Lanterna Verde',
  power: 'Anel do poder',
  id: 2,
};

describe('Suite de manipulação de herois', () => {
  before(async () => {
    await Database.remover();
    await Database.cadastrar(DEFAULT_REGISTER_ITEM);
    await Database.cadastrar(DEFAULT_UPDATE_ITEM);
  });

  it('deve cadastrar um heroi', async () => {
    const expected = DEFAULT_REGISTER_ITEM;
    await Database.cadastrar(DEFAULT_REGISTER_ITEM);

    const [realResult] = await Database.listar(expected.id);
    deepEqual(realResult, expected);
  });

  it('deve listar um heroi pelo id', async () => {
    const expected = DEFAULT_REGISTER_ITEM;
    const result = await Database.listar(1);
    deepEqual(result[0], expected);
  });

  it('deve atualizar um heroi pelo id', async () => {
    const expected = {
      ...DEFAULT_UPDATE_ITEM,
      name: 'Batman',
      power: 'ricão',
    };
    await Database.atualizar(expected.id, {
      name: expected.name,
      power: expected.power,
    });

    const [realResult] = await Database.listar(expected.id);
    deepEqual(realResult, expected);
  });
});
