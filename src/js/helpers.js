
export function getDate () {
  return Date.now()
}

export function shortDescription (desc) {
  return desc.split('').slice(15).join('')
}
