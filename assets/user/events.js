const store = require('../scripts/store')
const api = require('./api')
const ui = require('./ui')
const ordersAPI = require('../scripts/orders/api')
const cart = store.userData.cart


// const isEmpty = (arr) => {
//     arr.length === 0 ? console.log(true) : console.log(false)
// }

const total = (data) => {
    let total = 0
    for (let i = 0; i < data.length; i++) {
        total += (data[i].price) * 1
    }
    // console.log(total)
    return total
}

const addToCart = function (event) {
    event.preventDefault()
    let target = $(event.target).parents('ul').attr('data-id')
    let price = $(event.target).parents('ul').attr('data-price')
    let item, newOrder

    item = {
        id: target,
        price: price,
        qty: 1
    }

    cart.push(item)
    let orderTotal = total(cart)
    let items = []
    cart.forEach((element) => {
        if (element.id in cart) {
            console.log("Already in Array")
        } else
            items.push({
                item_id: element.id,
                quantity: element.qty
            })
    })

    newOrder = {
        owner: store.user._id,
        items: items,
        total: orderTotal,
        submitted: false

    }

    let data = {
        order: newOrder
    }

    console.log(newOrder)
    newOrder.items.length == 1 ?
        ordersAPI.createOrder(data)
        .then(ui.createOrderSuccess) :
        ordersAPI.updateOrder(data, store.userData.order_id)

}

const userHandlers = () => {
    $('.content').on('click', "button[id^='addToCart']", addToCart)
}

module.exports = {
    userHandlers
}