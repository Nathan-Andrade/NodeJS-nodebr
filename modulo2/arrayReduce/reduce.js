const { getPeople } = require('../for-forin/service');

Array.prototype.myReduce = function(callback){
  let endValue = typeof endValue !== undefined ? endValue : this[0]
  for(let index = 0; index <= this.length -1; index++){
    endValue = callback(endValue, this[index], this)
  }
  return endValue
}

async function main(){
  try{
    const { results } = await getPeople(`a`)
    const pesos = results.map(item => parseInt(item.height))
    const myList = [
     ['Nathan', 'Andrade'],
     ['NodeJs', 'Nerd']
   ]
   const total = myList.reduce((before, after) => {
    return before.concat(after)
   }, [])
   .join(', ')

    console.log('total', total)

  } catch (error){
    console.error(`DEU RUIM NO`, error)
  }
}
main()