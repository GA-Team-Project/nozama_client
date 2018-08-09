const store = require('../scripts/store')
const api = require('./api')
const ui = require('./ui')
const order = []


// EDIT
// const onShowEditDevice = function (event) {
//     event.preventDefault()
//     clearContent()
//     let template, target = $(event.target).parents('ul').attr('data-id')
//     store.devices.forEach((device) => {
//         if (device.id == target) {
//             template = `<div data-id="${device.id}" class="tmp">
//                         <h1>Update Device Information</h1>
//                         <hr>
//                             <form id="edit-device-form" class="border">
//                                 <input type="text" name="device[make]" placeholder="${device.make}">
//                                 <input type="text" name="device[model]" placeholder="${device.model}">
//                                 <input type="text" name="device[serial_number]" placeholder="${device.serial_number}">
//                                 <input type="submit" value="Edit Device">
//                             </form>
//                         </div>`
//         }
//     })
//     $('.tmp-container').css('display', 'block').append(template)
//     $('#edit-device-form').on('submit', onEditDevice)
// }

const addToCart = function (event) {
    event.preventDefault()
    // clearContent() <=== still doesnt exist!
    let item
    let target = $(event.target).parents('ul').attr('data-id')
    console.log(target)
    item = {
        id: target,
        qty: 1
    }
    order.push(item)
    console.log(order)
}




const userHandlers = () => {
    $('.content').on('click', "button[id^='addToCart']", addToCart)
    // $('.tmp-container').on('click', "button[id^='device-edit']", onShowEditDevice)
}

module.exports = {
    userHandlers
 }