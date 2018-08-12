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
    }
  }

  store.userData.order_id = store.userData.cart._id
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
  // Checkout Form Logic
  const cart = store.userData.cart
  console.log(cart)
  console.log(cart._id)
  let sameItemsInSart = 0
  let nozamaItems = store.items
  $('.content').html(checkoutTemplate)

  cart.items.forEach(item => {
    let itemPrice, itemName
    nozamaItems.filter(((obj) => {
      if (item.item_id == obj._id) {
        itemName = obj.name
        itemPrice = parseInt(obj.price) / 100.00
      }
    }))
    let itemQty = item.quantity
    let markup = `<tr><td> ${itemName} </td> <td> ${itemQty} </td> <td> $${itemPrice}.00 </td> </tr>`
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