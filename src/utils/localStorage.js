const getLocalStorage = key => {
  const data = localStorage.getItem(key)

  if (data !== null) {
    return JSON.parse(data)
  }

  return {}
}

const setLocalStorage = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data))
}

export {
  getLocalStorage,
  setLocalStorage
}