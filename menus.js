const clone = require('clone')
const config = require('./config')

let db = {}

const defaultData = {
  menus: [
      {
        id : 100,
        name: 'Fajita plate',
        description : 'Delicioso plato de fajitas con arroz y frijoles refritos',
        price : 6.50,
        image: 'fajita_plate.jpg'
      },
      {
        id: 110,
        name: 'Burrito',
        description : 'Un enorme burrito rellenos de tu carne favorita',
        price : 5.75,
        image: 'burrito.jpg'
      },
      {
        id : 200,
        name: 'Flauticas',
        price : 8.25,
        description : 'Nuestro platos mas exotico, 10 deliciosas flautas con pico de gallo y aguacate',
        image: 'flauticas.jpg'
      }
  ]
}

function getData (token) {
  //Each token has it's own copy of the DB. The token in this case is like an app id.
  let data = db[token]
  //This populates the default user data if there isn't any in the db.
  if (data == null) {
    data = db[token] = clone(defaultData)
  }
  return data
}

function getAll (token) {
  return new Promise((res) => {
    res(getData(token))
  })
}

module.exports = {
  getAll
}
