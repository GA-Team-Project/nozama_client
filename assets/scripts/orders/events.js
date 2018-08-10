'use strict'

const api = require('./api.js')
const ui = require('./ui.js')

const onGetOrders = (event) => {
  event.preventDefault()
  console.log('events')
  api.getOrders()
    .then(ui.getOrdersSuccess)
    .catch(ui.failure)
}

const onDeleteOrder = (event) => {
  event.preventDefault()
  const orderId = $(event.target).closest('ul').attr('data-id')
  api.deleteOrder(orderId)
    .then(() => onGetOrders(event))
    .catch(ui.failure)
}

const addHandlers = () => {
  $('#cart').on('click', onGetOrders)
  $('#cart').on('click', console.log('click'))
  // $('#getOrdersButton').on('click', console.log('click'))
  // $('#clearordersButton').on('click', onClearorders)
  $('.content').on('click', 'button', onDeleteOrder)
}

module.exports = {
  addHandlers
}
