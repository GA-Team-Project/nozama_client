const store = require('../scripts/store')
const api = require('./api')
const ui = require('./ui')
const ordersAPI = require('../scripts/orders/api')
const config = require('../scripts/config')

const total = (arr) => {
    let total = 0
    // console.log(cart)
    arr.forEach(item => {
        if (item.hasOwnProperty('price')) {
            // for (let i = 0; i < arr.length; i++) {
                total += (item.price) * 1
            // }
        }
        store.userData.cart.total += total
    })

    console.log(total)
    console.log(store.userData.cart.total)
    // console.log(arr)
    // return total
}

const addToCart = function (event) {
    const cart = store.userData.cart
    const cartItems = cart.items
    let orderTotal = parseInt(cart.total)
    console.log("start",orderTotal)
    let target = $(this).parents('ul').attr('data-id')
    let price = $(this).parents('ul').attr('data-price')
    let item, newOrder, data, items = []
    orderTotal += parseInt(price)
    console.log(orderTotal)
    console.log(price)

    item = {
        item_id: target,
        // price: price,
        quantity: 1
    }

    // cartItems.push(item)
    // orderTotal += parseInt(item.price)
    // console.log(orderTotal)
    // let total = 0
    cart.items.forEach((item) => {
        // total += item.price
        // console.log(total)
        if (item.item_id in cart.items) {
            console.log("Already in Array")
        } else
            items.push({
                item_id: item.id,
                quantity: item.qty
            })
    })

    newOrder = {
        owner: store.user._id,
        items: cartItems,
        total: orderTotal,
        submitted: false

    }

    data = {
        order: newOrder
    }

    // console.log(newOrder)
    newOrder.items.length == 1 ?
        ordersAPI.createOrder(data)
        .then(ui.createOrderSuccess) :
        ordersAPI.updateOrder(data, store.userData.order_id)

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