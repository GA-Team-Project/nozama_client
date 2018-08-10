'use strict'

const store = require('../scripts/store')


const createOrderSuccess = (data) => {
    // console.log("Data is: ", data)
    // console.log("Order ID is: ", data.order._id)
    store.user.order_id = data.order._id
    console.log(store.user.order_id)
}


module.exports = {
    createOrderSuccess
}