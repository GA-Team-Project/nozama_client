'use strict'

const store = require('../scripts/store')
const ordersEvents = require('../scripts/orders/events')
// const userEvents = require('../user/events')

const clearMessage = (id) => {
  // console.log(id)
  id.html('')
}

const signUpSuccess = function () {
  $('#sign-up-form')[0].reset()
  $('#sign-up-message').css('background', '#FFFFCC').text('Sign up successful! Sign in to get started!')
  setTimeout(
    () => {
      clearMessage($('#sign-up-message'))
    }, 1750
  )
}

const signInSuccess = function (data) {
  store.user = data.user
  let firstName = data.user.first_name
  // console.log(store)
  $('#sign-in-form')[0].reset()
  $('#sign-up-form')[0].reset()
  $('.sign-in-up').css('display', 'none')
  $('#seeInfo').css('display', 'block').text(`Hello, ${firstName}`)
  $('#cart').css('display', 'block')
  ordersEvents.onGetOrders()
}

const changePasswordSuccess = function () {
  $('#changedPasswordMessage').text('Password changed successfully').css('background', '#FFFFCC')
  $('#changedPasswordMessage').delay(3200).fadeOut(300)
  $('#change-password')[0].reset()
}

const signOutSuccess = function () {
  store.user = {}
  store.orders = []
  // Close toggle menu (Mobile View)
  // $('.navbar-toggle').hasClass('collapsed') ?
  //   '' : $('.navbar-toggle').click()
  $('.sign-in-up').css('display', 'block')
  $('#seeInfo').css('display', 'none')
  $('#cart').css('display', 'none')
  $('#username').text(``)
  $('#changedPasswordMessage').text('Signed out! See you next time!').css('background', '#FFFFCC').fadeOut(3000)
  setTimeout(function () {
    $('#userInfoModal').modal('hide')
  }, 3000)
}
const signInFailure = function () {
  $('#sign-in-form')[0].reset()
  $('#sign-in-message').text('Oh no, incorrect email or password').css('background', '#FFFFCC').fadeOut(10000)
}

const signUpFailure = function () {
  $('#sign-up-form')[0].reset()
  $('#sign-up-message').text('Oh no, something went wrong! That email might already be in the system or you passwords do not match').css('background', '#FFFFCC').fadeOut(30000)
}

const changePasswordFailure = function () {
  $('#change-password')[0].reset()
  $('#changedPasswordMessage').text('Oh no, something went wrong!').css('background', '#FFFFCC').fadeOut(10000)
}

const failure = function (error) {
  console.log('failure ran. Data is:', error)
}

module.exports = {
  signUpSuccess,
  signInSuccess,
  changePasswordSuccess,
  signOutSuccess,
  signInFailure,
  signUpFailure,
  changePasswordFailure,
  failure
}
