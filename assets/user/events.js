const store = require('../scripts/store')
const api = require('./api')
const ui = require('./ui')
const ordersAPI = require('../scripts/orders/api')
const config = require('../scripts/config')

const addToCart = function (event) {
    const cart = store.userData.cart
    const cartItems = cart.items
    let orderTotal = 0
    let target = $(event.target).parents('ul').attr('data-id')
    let itemPrice = $(event.target).parents('ul').attr('data-price')
    let item, newOrder, data, items = []

    item = {
            item_id: target,
            quantity: 1
        }
        // console.log(item)

        !cart.hasOwnProperty('owner') ? (() => {
            orderTotal += parseInt(itemPrice)
            // console.log(orderTotal)

            items.push(item)
            newOrder = {
                owner: store.user._id,
                items: items,
                total: orderTotal,
                submitted: false
            }
            data = {
                order: newOrder
            }
            // console.log(data)
            ordersAPI.createOrder(data)
                .then(ui.createOrderSuccess)
                .catch(console.error())
        })() : (() => {
            orderTotal += parseInt(cart.total)
            orderTotal += parseInt(itemPrice)
            // console.log(orderTotal)

            cartItems.push(item)
            cart.total = orderTotal
            data = {
                order: cart
            }
            // console.log(data)
            ordersAPI.updateOrder(data, store.userData.order_id)
                .then(ui.updateOrderSucces)
        })()
}

const userHandlers = () => {
    $('.content').on('click', "button[id^='addToCart']", addToCart)
    $('#stripe-input').val('Bearer ' + store.user.token)
    $('.stripe-button').attr('data-amount', store.userData.cart.total)
    $('.stripe-button').attr('data-description', `Nozama ${store.userData.cart._id}`)
    $('#stripe-form').attr('action', config.apiUrls)
}

module.exports = {
    userHandlers
}