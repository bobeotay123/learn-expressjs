function id(){
  return Math.floor(Math.random() * Math.floor(Math.random() * Date.now()))
}

module.exports = id;