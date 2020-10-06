/*  
0 Obter um user
1 Obter o número do user a partir do seu ID
2 Obter o endereco do user pelo ID
*/

const util = require('util')

function getUser(){
  //quando der algum problema -> reject(ERROR)
  //quando der sucess -> RESOLV
  return new Promise(function resolvePromise(resolve, reject){
    setTimeout(function () {
      //return reject(new Error('DEU RUIM DE VERDADE!'))

      return resolve({
        id: 1,
        name: 'Aladin',
        birthday: new Date()
      })
    }, 1000)
  })
}

function getTelephone(idUser){
  return new Promise(function resolvePromise(resolve, reject){
    setTimeout(() => {
      return resolve({
        telephone: '02252304',
        ddd: 33
      })
    }, 2000)
  })
}

function getAddress(idUser, callback){
  setTimeout(() => {
    return callback(null, {
      rua: 'Eldorado',
      number: 552
    })
  })
}

function resolveUser(err, user){

}

const userPromise = getUser()
//para manipular o sucesso função .then
  userPromise
  .then(function (telephone){
    return getTelephone(telephone.id)
      .then(function resolverTelephone(result){
        return{
          usuario: {
            nome: telephone.name,
            id: telephone.id
          },
          telefone: result
        }
      })
  })
  .then(function(resultado){
    console.log('Resultado', resultado)
  })  //para manipular erros função .catch
  .catch(function(error){     
      console.error('DEU RUIM :(', error)
  })

// getUser(function resolveUser(err, user){
//   if(err){
//     console.log('Deu Ruim o user :(', err)
 //    return;
 //  }

 //  getTelephone(user.id, function resolveTelephone(err1, telephone){
 //   if (err1) {
 //     console.log('Deu Ruim no Telephone :(', err)
 //     return;
  //  }
  //  getAddress(user.id, function resolveAdress(err2, address){
  //    if(err2){
  //      console.log('Deu Ruim no Address', err)
 //     }

 //     console.log(`
 //       Name: ${user.name},
 //       Address: ${address.rua}, N°${address.number}
 //       Telephone: (${telephone.ddd}) ${telephone.telephone}
 //     `)
 //   })
 //  })
 //})



//console.log('user', user);
//console.log('telephone', telephone);