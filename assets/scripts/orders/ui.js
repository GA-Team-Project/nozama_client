'use strict'

const checkoutTemplate = require('../templates/checkout.handlebars')
const showOrdersTemplate = require('../templates/order.handlebars')
const store = require('../store')
let cart = store.userData.cart
let orderHistory = store.userData.orders


const createOrderSuccess = () => {
  // console.log(store.user.orders)
}

const getOrdersSuccess = (data) => {
  orderHistory = []
  const current_user = store.user._id
  for (let i = 0; i < data.orders.length; i++) {
    if (data.orders[i].owner === current_user && data.orders[i].submitted ) {
      orderHistory.push(data.orders[i])
    } else if (!data.orders[i].submitted && data.orders[i].owner === current_user ) {
      cart.push(data.orders[i])
    } else { console.log("Skipping")}
  }
  // console.log("Store", store)
  console.log("Cart", cart)
  // console.log("Orders", orderHistory)
  store.userData.order_id = store.userData.cart[0]._id
  const showOrdersHtml = showOrdersTemplate({ orders: orderHistory })
  $('#userInfoModal').modal('hide')
  $('.content').html(showOrdersHtml)
}

// WORK IN PROGRESS
const showCart = function () {
  const showCartHtml = checkoutTemplate({ items: cart[0]})
  $('.content').html(showCartHtml)
}

const failure = (error) => {
  console.error(error)
}

module.exports = {
  createOrderSuccess,
  getOrdersSuccess,
  showCart,
  failure
}