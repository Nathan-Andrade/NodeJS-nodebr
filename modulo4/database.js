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
    const endData = [ ...data, heroWithId ]
    const result = await this.writeFile(endData)

    return result;
  }

  async list(id){
    const data = await this.getFileData()
    const filteredData = data.filter(item => (id ? (item.id === id) : true))
    return filteredData
  }

  async remove(id){
    if(!id){
     return await this.writeFile([])
    }

    const data = await this.getFileData()
    const indice = data.findIndex(item => item.id === parseInt(id))

    if(indice === -1){
      throw Error('O usuario informado não existe')
    }
    
    data.splice(indice, 1)
    return await this.writeFile(data)
  }

  async update(id, modifications){
    const data = await this.getFileData()
    const indice = data.findIndex(item => item.id === parseInt(id))

    if(indice === -1){
      throw Error('O heroi informado não existe')
    }
    const actual = data[indice]

    const updateObject ={
      ...actual,
      ...modifications
    }

    data.splice(indice, 1)
    
    return await this.writeFile([
      ...data,
      updateObject
    ])
  }
}

module.exports = new Database()