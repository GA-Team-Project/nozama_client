'use strict'

const showItemsTemplate = require('../templates/item.handlebars')
const store = require('../store')

const getItemsSuccess = (data) => {
  store.items = data.items
  const showItemsHtml = showItemsTemplate({ items: data.items })
  $('.content').html(showItemsHtml)
}

const clearItems = () => {
  $('.content').empty()
}

const failure = (error) => {
  console.error(error)
}

module.exports = {
  getItemsSuccess,
  clearItems,
  failure
}
