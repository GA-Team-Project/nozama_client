'use strict'

const showItemsTemplate = require('../templates/item.handlebars')

const getItemsSuccess = (data) => {
  console.log(data)
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
