function getDateObj (param) {
  const regex = /^\d+$/
  if (regex.test(param.trim())) param = Number(param)

  const date = new Date(param)
  const unix = date.getTime()
  const utc = date.toUTCString()

  if (utc === 'Invalid Date') return { error: utc }

  return {
    unix,
    utc
  }
}

module.exports = getDateObj
