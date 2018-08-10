'use strict'

const showOrdersTemplate = require('../templates/order.handlebars')
const store = require('../store')
// const showOrdersItemsTemplate = require('../templates/order-items.handlebars')

const getOrdersSuccess = (data) => {
  console.log(data)
  for (let i = 0; i < data.orders.length; i++) {
    if (data.orders[i].submitted === true) {
      const orders = data.orders
      // console.log('1')
      // console.log(orders)
      // console.log('1')
      const showOrdersHtml = showOrdersTemplate({ orders: orders })
      // const showOrdersItemsHtml = showOrdersItemsTemplate({ items: data.orders.items })
      $('.content').html(showOrdersHtml)
    } else if (data.orders[i].submitted === false) {
      store.user.cart = data.orders
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
  getOrdersSuccess,
  // getCurrentOrderSuccess,
  failure
}
