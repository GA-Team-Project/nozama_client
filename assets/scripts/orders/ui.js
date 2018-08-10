'use strict'

const store = require('../store')
// const createOrderTemplate = require('../templates/order.handlebars')
const showOrdersTemplate = require('../templates/order.handlebars')

const createOrderSuccess = () => {
  console.log(store.user.orders)
}

const getOrdersSuccess = (data) => {
  // console.log(data)
  const showOrdersHtml = showOrdersTemplate({ orders: data.orders })
  $('.content').html(showOrdersHtml)
}

const failure = (error) => {
  console.error(error)
}

module.exports = {
  createOrderSuccess,
  getOrdersSuccess,
  failure
}
