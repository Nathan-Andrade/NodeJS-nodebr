const service = require('../for-forin/service');

Array.prototype.myMap = function (callback){
  const newArrayMaped = []
  for(let indice = 0; indice <= this.length - 1; indice++) {
    const result = callback(this[indice], indice)
    newArrayMaped.push(result)
  }
  return newArrayMaped
}

async function main(){
  try{
    const result = await service.getPeople(`a`)
    const names = result.results.myMap(function (item, indice){
     return `[${indice}]${item.name}`
   })
    console.log('names', names)
  } catch (error){
    console.error(`DEU RUIM Aí`, error)
  }
}
main()