function getDateObj (param) {
  const regex = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/
  if (!regex.test(param.trim())) param = Number(param)

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
