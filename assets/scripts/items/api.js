'use strict'

const config = require('../config')

const getItems = function () {
  return $.ajax({
    url: config.apiUrl + '/items'
  })
}

const deleteItem = (itemId) => {
  return $.ajax({
    url: config.apiUrl + '/items/' + itemId,
    method: 'DELETE'
  })
}

module.exports = {
  getItems,
  deleteItem
}
