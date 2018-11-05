function connectTwo (your_sid) {
  return `https://api.exotel.com/v1/Accounts/${your_sid}/Calls/connect`
}

module.exports = {
  From : '8879367443',
  CallerId : '09513886363',
  Url : 'http://my.exotel.com/exotel301/exoml/start_voice/197615',
  connectTwo
}