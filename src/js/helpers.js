
export function getDate () {
  return Date.now()
}

export function sliceText (text) {
  const newText = !text.length
    ? 'No description'
    : text.split(' ').slice(0, 10).join(' ') + '...'
  return newText
}
