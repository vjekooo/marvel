
const crypto = require('crypto')
const publicKey = '3ab9cb3d2d525e203019ad099f6fc464'
const privateKey = 'f147975ba1cd381212e53cae6a8bb2cd319a9ac3'
const ts = new Date().getTime()
const hash = crypto.createHash('md5').update(`${ts}${privateKey}${publicKey}`).digest('hex')
const fetchOptions = {
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
}

const avengers = [
  1009220,
  1009368,
  1009664,
  1009351,
  1009338,
  1009189
]

const fetchAvenger = async avenger => {
  const url = `
    http://gateway.marvel.com/v1/public/characters/${avenger}?ts=${ts}&apikey=${publicKey}&hash=${hash}
  `
  const response = await fetch(url, fetchOptions)
  const data = await response.json()
  return data.data.results[0]
}

const fetchAvengers = async () => {
  const remoteAvengers = []
  await Promise.all(avengers.map(async avenger => {
    const remoteAvenger = await fetchAvenger(avenger)
    remoteAvengers.push(remoteAvenger)
  }))
  return remoteAvengers
}

export default fetchAvengers
