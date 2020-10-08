const EventEmitter = require('events');
class MyEmissor extends EventEmitter {

}
const myEmissor = new MyEmissor()
const nameEvent = 'usuario:click'

myEmissor.on(nameEvent, function(click){
  console.log('um usuario clicou', click)
})

//myEmissor.emit(nameEvent, 'na barra de rolagem')
//myEmissor.emit(nameEvent, 'no ok')

//let count = 0
//setInterval(function () {
//  myEmissor.emit(nameEvent, 'no ok' + (count ++))
//}, 1000)

const stdin = process.openStdin()
function main(){
  return new Promise(function (resolve, reject){
    stdin.addListener('data', function (value){
     // console.log(`Você digitou: ${value.toString().trim()}`)
      return resolve(value)
    })
  })
}
main().then(function (resultado){
  console.log('resultado', resultado.toString())
})