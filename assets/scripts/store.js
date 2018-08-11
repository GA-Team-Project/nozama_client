'use strict'

const store = {
    user: {
        first_name: String(),
    },
    userData: {
        orders: [],
        openOrders: [],
        cart: [],
        order_id: ''
    },
    items:  Array()
}

module.exports = store
