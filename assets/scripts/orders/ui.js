'use strict'

// const createOrderTemplate = require('../templates/order.handlebars')
const showOrdersTemplate = require('../templates/order.handlebars')
const store = require('../store')
let cart = store.user.cart
// const showOrdersItemsTemplate = require('../templates/order-items.handlebars')

const createOrderSuccess = () => {
  console.log(store.user.orders)
}

const orderHistory = store.user.orders
const getOrdersSuccess = (data) => {
  store.user.orders = []
  // console.log(data)
  for (let i = 0; i < data.orders.length; i++) {
    if (data.orders[i].submitted === true) {
      orderHistory.push(data.orders[i])
      console.log(orderHistory)
      const orders = orderHistory
      // console.log(orders)
      // console.log('1')
      const showOrdersHtml = showOrdersTemplate({ orders: orders })
      // const showOrdersItemsHtml = showOrdersItemsTemplate({ items: data.orders.items })
      $('.content').html(showOrdersHtml)
    } else if (data.orders[i].submitted === false) {
      cart.push(data.orders[i])
    }
  }
  console.log(store)

  setTimeout(function () {
    $('#userInfoModal').modal('hide')
  }, 2000)
}

// const getCurrentOrderSuccess = (data) => {
//   console.log(data)
//   for (let i = 0; i < data.orders.length; i++) {
//     if (data.orders[i].submitted === true) {
//       const orders = data.orders
//       // console.log('1')
//       // console.log(orders)
//       // console.log('1')
//       const showOrdersHtml = showOrdersTemplate({ orders: orders })
//       // const showOrdersItemsHtml = showOrdersItemsTemplate({ items: data.orders.items })
//       $('.content').html(showOrdersHtml)
//     }
//   }

//   setTimeout(function () {
//     $('#userInfoModal').modal('hide')
//   }, 2000)
// }

const failure = (error) => {
  console.error(error)
}

module.exports = {
  createOrderSuccess,
  getOrdersSuccess,
  // getCurrentOrderSuccess,
  failure
}
