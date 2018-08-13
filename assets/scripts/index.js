'use strict'

const authEvents = require('../auth/events')
const itemEvents = require('../scripts/items/events')
const userEvents = require('../user/events')
const orderEvents = require('../scripts/orders/events')

$(() => {
  authEvents.authHandlers()
  itemEvents.addHandlers()
  userEvents.userHandlers()
  orderEvents.addHandlers()
  $('#getItemsButton').click()
})