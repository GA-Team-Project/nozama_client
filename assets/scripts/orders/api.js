'use strict'

const config = require('../config')
const store = require('../store')

const getOrders = function () {
  return $.ajax({
    url: config.apiUrl + '/orders',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const deleteOrder = (itemId) => {
  return $.ajax({
    url: config.apiUrl + '/orders/' + itemId,
    method: 'DELETE'
  })
}

module.exports = {
  getOrders,
  deleteOrder
}
