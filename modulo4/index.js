const Commander = require('commander');
const Database = require('./database');
const Hero = require('./hero');

(async () => {
  Commander
      .version('v1')
      .option('-n, --name [value]', "Nome do herói")
      .option('-p, --power [value]', "Poder do Herói")
      //CRUD
      .option('-r, --register', "Cadastrar herói")
      .option('-r, --list [value]', "Listar herói")
      .option('-r, --update [value]', "Atualzar herói")
      .option('-r, --remove [value]', "Remover herói")
      .parse(process.argv)

  const hero = new Hero(Commander)
  
  try{
    if(Commander.register){
       await Database.register(hero)

      console.log('Herói cadastrado com sucesso')
      return;
    }

    if(Commander.list){
      const id = Commander.list;
      const result = await Database.listar(id);
      console.log(result)
      return;
    }

    if(Commander.update){
      const id = Commander.list;
      console.log('id', id);
      await Database.update(id, hero);

      console.log('item atualizado com sucesso!')
      return;
    }

    if(Commander.remove){
      const id = Commander.remove;
      await Database.remove(id)

      console.log('Item removido com sucesso')
      return;
    }
  } catch (error) {
    console.error('Deu Ruim aí', error)
  }
})();