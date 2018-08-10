'use strict'

const store = require('../scripts/store')
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
  console.log(store)
  $('#sign-in-form')[0].reset()
  $('#sign-up-form')[0].reset()
  $('#sign-in-message').css('background', '#FFFFCC').text('Sign in succeful!')
  setTimeout(
    () => {
      clearMessage($('#sign-in-message'))
    }, 750
  )
  $('.sign-in-up').css('display', 'none')
  $('#seeInfo').css('display', 'block')
  $('#cart').css('display', 'block')
}

const changePasswordSuccess = function () {
  $('#changedPasswordMessage').text('Password changed successfully').css('background', '#FFFFCC')
  $('#changedPasswordMessage').delay(3200).fadeOut(300)
  $('#change-password')[0].reset()
}

const signOutSuccess = function () {
  store.user = {}
  // userEvents.clearContent()

  // Close toggle menu (Mobile View)
  // $('.navbar-toggle').hasClass('collapsed') ?
  //   '' : $('.navbar-toggle').click()
  $('.sign-in-up').css('display', 'block')
  $('#seeInfo').css('display', 'none')
  $('#cart').css('display', 'none')
  $('#changedPasswordMessage').text('Signed out! See you next time!').css('background', '#FFFFCC').fadeOut(3000)
  setTimeout(function () {
    $('#userInfoModal').modal('hide')
  }, 2000)
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
