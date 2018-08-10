'use strict'

const api = require('./api.js')
const ui = require('./ui.js')

const onGetItems = (event) => {
  event.preventDefault()
  api.getItems()
    .then(ui.getItemsSuccess)
    .catch(ui.failure)
}

// const onClearItems = (event) => {
//   event.preventDefault()
//   ui.clearItems()
// }

// const onDeleteItem = (event) => {
//   event.preventDefault()
//   const itemId = $(event.target).closest('ul').attr('data-id')
//   api.deleteItem(itemId)
//     .then(() => onGetItems(event))
//     .catch(ui.failure)
// }

const addHandlers = () => {
  $('#getItemsButton').on('click', onGetItems)
  $('.navbar-brand').on('click', onGetItems)
  // $('#getItemsButton').on('click', console.log('click'))
  // $('#clearItemsButton').on('click', onClearItems)
  // $('.content').on('click', 'button', onDeleteItem)
}

module.exports = {
  addHandlers
}
