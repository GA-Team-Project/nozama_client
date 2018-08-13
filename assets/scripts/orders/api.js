'use strict'

const config = require('../config')
const store = require('../store')

const createOrder = (data) => {
  return $.ajax({
    url: config.apiUrl + '/orders',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })  
}

const updateOrder = (data, id) => {
  return $.ajax({
    url: config.apiUrl + '/orders/' + id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })  
}

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
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  getOrders,
  deleteOrder,
  createOrder,
  updateOrder
}
