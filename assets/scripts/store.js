'use strict'

const store = {
    user: {
        first_name: String(),
        orders: [],
        cart: [],
        oder_id: ''
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
