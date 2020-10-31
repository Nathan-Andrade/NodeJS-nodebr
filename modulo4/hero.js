class Hero { 
  constructor({ name, power, id }){
    this.name = name,
    this.power = power,
    this.id = id || Date.now();
  } 
}

module.exports = Hero;