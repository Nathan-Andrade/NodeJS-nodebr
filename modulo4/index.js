const Commander = require('commander');
const Database = require('./database');
const Hero = require('./hero');

async function main(){
  Commander
      .version('v1')
      .option('-n, --name [value]', "Nome do herói")
      .option('-p, --power [value]', "Poder do Herói")

      .option('-r, --register', "Cadastrar herói")
      .parse(process.argv)

  const hero = new Hero(Commander)

  try{
    if(Commander.register){
      console.log(hero)
     // const result = await Database.register(Commander)
    }
  } catch (error) {
    console.error('Deu Ruim aí', error)
  }
}

main();