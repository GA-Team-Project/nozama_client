'use strict'

const authEvents = require('../auth/events')
const itemEvents = require('../scripts/items/events')
const userEvents = require('../user/events')
const orderEvents = require('../scripts/orders/events')
const config = require('./config')
const store = require('./store')

const handler = StripeCheckout.configure({
  key: 'pk_test_I14scEAR7GUQqoFGFTTdriYt',
  image: 'https://stripe.com/img/documentation/checkout/marketplace.png',
  locale: 'auto',
  token: function (token) {
    $.ajax({
      url: config.apiUrls + '/charges',
      type: 'POST',
      data: {
        token
      }
    })
  }
})

const onSendCharge = event => {
  event.preventDefault()
  handler.open({
    name: 'nozama',
    description: `Nozama ${store.userData.cart._id}`,
    amount: store.userData.cart.total
  })
}

$(() => {
  authEvents.authHandlers()
  itemEvents.addHandlers()
  userEvents.userHandlers()
  orderEvents.addHandlers()
  onSendCharge()
  $('#getItemsButton').click()
})