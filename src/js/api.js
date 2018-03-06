
const fetch = require('node-fetch')
const crypto = require('crypto')
const publicKey = '3ab9cb3d2d525e203019ad099f6fc464'
const privateKey = 'f147975ba1cd381212e53cae6a8bb2cd319a9ac3'
const ts = new Date().getTime()
const hash = crypto.createHash('md5').update(`${ts}${privateKey}${publicKey}`).digest('hex')
const avengers = [
  1009220,
  1009368,
  1009664,
  1009351,
  1009338,
  1009189
]
avengers.map((avenger, index) => {
  const url = `
    http://gateway.marvel.com/v1/public/characters/${avenger}?ts=${ts}&apikey=${publicKey}&hash=${hash}
  `
  fetchMarvelData(url, index)
})

let fetchedData = {}

async function fetchMarvelData (url, index) {
  const response = await fetch(url, {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  })
  const data = await response.json()
  fetchedData[`avenger${index}`] = data.data.results[0]
}

export default fetchedData
