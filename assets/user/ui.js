'use strict'

const store = require('../scripts/store')


const createOrderSuccess = (data) => {
    store.userData.order_id = data.order._id
    store.userData.cart = data.order

}

const updateOrderSucces = (data) => {
    // console.log(data)
    // store.userData.cart = data.order
}


module.exports = {
    createOrderSuccess,
    updateOrderSucces
}