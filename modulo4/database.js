const { readFile, writeFile } = require('fs');
const { promisify } = require('util');

const readFileAsync = promisify(readFile)
const writeFileAsync = promisify(writeFile)

class Database {
  constructor(){
    this.FILE_NAME = 'heros.json'
  }
  async getFileData(){
    const file = await readFileAsync(this.FILE_NAME, 'utf8')
    return JSON.parse(file.toString())
  }

  async writeFile(data){
    await writeFileAsync(this.FILE_NAME, JSON.stringify(data))

    return true
  }

  async register(hero){
    const data = await this.getFileData()
    
    const id = hero.id <= 2 ? hero.id : Date.now();
    const heroWithId = { id, ...hero }
    
    return await this.writeFile([ ...data, heroWithId ])
  }

  async list(id){
    const data = await this.getFileData()

    return data.filter(item => (id ? (item.id === id) : true))
  }

  async remove(id){
    if(!id){
      await this.writeFile([]);
      return true;
    }

    const data = await this.getFileData()

    const indice = data.findIndex(item => item.id === parseInt(id))

    if(indice === -1){
      throw Error('O usuario informado não existe')
    }
    const actual = data[indice];
    data.splice(indice, 1)
     await this.writeFile(data)
     return true;
  }

  async update(id, modifications){
    const data = await this.getFileData()
    const indice = data.findIndex(item => item.id === parseInt(id))

    if(indice === -1){
      throw Error('O heroi informado não existe')
    }
    const actual = data[indice]
    data.splice(indice, 1)

    const updatedObject = JSON.parse(JSON.stringify(modifications))
    const updatedData = Object.assign({}, actual, updatedObject)
    
    return await this.writeFile([...data, updatedData])
  }
}

module.exports = new Database()