'use strict'

const api = require('./api.js')
const ui = require('./ui.js')
const store = require('../store')


const createOrder = (data) => {
  api.createOrder(data)
    .then(ui.createOrderSuccess)
    .catch(ui.failure)
}

const onGetOrders = () => {
  api.getOrders()
    .then(ui.getOrdersSuccess)
    .then(() => {
      const cartLength = store.userData.cart.items.length
      const badge = $('.badge-notify')      
      // cartLength < 1 ? '' : 
      badge.text(cartLength)
    })
    .catch(ui.failure)
}

// const onDeleteOrder = (event) => {
//   event.preventDefault()
//   const orderId = $(event.target).closest('ul').attr('data-id')
//   api.deleteOrder(orderId)
//     .then(() => onGetOrders(event))
//     .catch(ui.failure)
// }

const onShowCart = () => {
  ui.showCart()
}

const addHandlers = () => {
  $('#cart').on('click', onShowCart)
  // $('#cart').on('click', console.log('click'))
  $('#past-orders').on('click', ui.onShowPastOrders)
  // $('#past-orders').on('click', console.log('click'))
  // $('#getOrdersButton').on('click', console.log('click'))
  // $('#clearordersButton').on('click', onClearorders)
  // $('.content').on('click', 'button', onDeleteOrder)
}

const onSubmitOrders = (event) => {
  event.preventDefault();
  
}

module.exports = {
  addHandlers,
  createOrder,
  onGetOrders,
  onShowCart
}
