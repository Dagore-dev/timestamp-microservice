function getCurrentDateObj () {
  const date = new Date()
  const unix = date.getTime()
  const utc = date.toUTCString()

  return {
    unix,
    utc
  }
}

module.exports = getCurrentDateObj
