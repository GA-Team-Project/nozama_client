'use strict'

const store = require('../scripts/store')
const badge = $('.badge-notify')

const createOrderSuccess = (data) => {
    store.userData.order_id = data.order._id
    store.userData.cart = data.order
}

const updateOrderSucces = (data) => {
    let newNumber = parseInt(badge.text()) + 1
    badge.text(newNumber)
    // store.userData.cart = data.order
}


module.exports = {
    createOrderSuccess,
    updateOrderSucces
}