'use strict'

const showOrdersTemplate = require('../templates/order.handlebars')
const showOrdersItemsTemplate = require('../templates/order-items.handlebars')

const getOrdersSuccess = (data) => {
  console.log(data)
  const showOrdersHtml = showOrdersTemplate({ orders: data.orders })
  const showOrdersItemsHtml = showOrdersItemsTemplate({ items: data.orders.items })
  $('.content').html(showOrdersHtml)
}

const failure = (error) => {
  console.error(error)
}

module.exports = {
  getOrdersSuccess,
  failure
}
