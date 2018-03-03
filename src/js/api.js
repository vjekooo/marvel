
const crypto = require('crypto')
const publicKey = '3ab9cb3d2d525e203019ad099f6fc464'
const privateKey = 'f147975ba1cd381212e53cae6a8bb2cd319a9ac3'
const ts = new Date().getTime()
const hash = crypto.createHash('md5').update(`${ts}${privateKey}${publicKey}`).digest('hex')
const url = `
  http://gateway.marvel.com/v1/public/characters?ts=${ts}&apikey=${publicKey}&hash=${hash}
`
async function fetchMarvelData () {
  const response = await fetch(url, {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  })
  return response.json()
}

fetchMarvelData()

export default fetchMarvelData
