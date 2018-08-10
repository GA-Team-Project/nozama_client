const store = require('../scripts/store')
const api = require('./api')
const ui = require('./ui')
const cart = []


// const isEmpty = (arr) => {
//     arr.length === 0 ? console.log(true) : console.log(false)
// }

const total = (cart) => {
    let total = 0
    for (let i = 0; i < cart.length; i++) {
        total += (cart[i].price) * 1
    }
    console.log(total)
    return total
}

const addToCart = function (event) {
    event.preventDefault()
    // clearContent() <=== still doesnt exist!
    // if (store.user.token == null) {
    //     return
    // } else {
        let target = $(event.target).parents('ul').attr('data-id')
        let price = $(event.target).parents('ul').attr('data-price')
        let item, order

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
        order = {
            owner: store.user._id,
            items: items,
            total: orderTotal,
            submitted: false

        }
        // console.log(cart)

        api.createOrder(order)
    }
// }




const userHandlers = () => {
    $('.content').on('click', "button[id^='addToCart']", addToCart)
    // $('.tmp-container').on('click', "button[id^='device-edit']", onShowEditDevice)
}

module.exports = {
    userHandlers
}
