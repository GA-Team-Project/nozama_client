'use strict'

const showOrdersTemplate = require('../templates/order.handlebars')

const getOrdersSuccess = (data) => {
  console.log(data)
  const showOrdersHtml = showOrdersTemplate({ orders: data.orders })
  $('.content').html(showOrdersHtml)
}

const failure = (error) => {
  console.error(error)
}

module.exports = {
  getOrdersSuccess,
  failure
}
