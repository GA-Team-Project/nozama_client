'use strict'

const checkoutTemplate = require('../templates/checkout.handlebars')
const showOrdersTemplate = require('../templates/order.handlebars')
const store = require('../store')
let orderHistory = store.userData.orders


const createOrderSuccess = () => {
  // console.log(store.user.orders)
}

const getOrdersSuccess = (data) => {
  const current_user = store.user._id
  for (let i = 0; i < data.orders.length; i++) {
    if (data.orders[i].owner === current_user && data.orders[i].submitted) {
      orderHistory.push(data.orders[i])
    } else if (!data.orders[i].submitted && data.orders[i].owner === current_user) {
      store.userData.cart = data.orders[i]
      // console.log(cart)
    } else {
      console.log("Skipping")
    }
  }
  // console.log("Store", store)
  console.log("Cart store", store.userData.cart)
  // console.log("Orders", orderHistory)
  store.userData.order_id = store.userData.cart._id
  console.log(store)
  return cart
}
const onShowPastOrders = () => {
  const showOrdersHtml = showOrdersTemplate({
    orders: orderHistory
  })
  $('#userInfoModal').modal('hide')
  $('.content').html(showOrdersHtml)
}


// WORK IN PROGRESS
const showCart = function () {

  const cart = store.userData.cart
  $('.content').html(checkoutTemplate)

  cart.items.forEach(item => {
    let itemName = item.item_id
    let itemQty = item.quantity
    var markup = `<tr><td> ${itemName} </td> <td></td> <td> ${itemQty} </td></tr>`
    $('tbody').append(markup)
  })
  let total = parseInt(cart.total) / 100.00
  $('#total').html(`Total: $${total}.00`)
}

const failure = (error) => {
  console.error(error)
}

module.exports = {
  createOrderSuccess,
  getOrdersSuccess,
  onShowPastOrders,
  showCart,
  failure
}