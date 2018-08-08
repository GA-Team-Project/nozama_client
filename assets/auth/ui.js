'use strict'

const store = require('../scripts/store')
// const userEvents = require('../user/events')


const clearMessage = (id) => {
  // console.log(id)
  id.html('')
}


const signUpSuccess = function () {

}

const signInSuccess = function (data) {
  store.user = data.user
  $('#sign-in-form')[0].reset()
  $('#sign-up-form')[0].reset()
  $('#sign-in-message').css('background', 'green').text('Sign in Succefully!')
  setTimeout(
    () => {
      clearMessage($('#sign-in-message'))
    }, 750
  )
  
} 

const changePasswordSuccess = function () {
}

const signOutSuccess = function () {
  store.user = {}
  // userEvents.clearContent()

  // Close toggle menu (Mobile View)
  $('.navbar-toggle').hasClass('collapsed') ? 
    '' : $('.navbar-toggle').click()
}

const failure = function (error) {
  console.log('failure ran. Data is:', error)
}

module.exports = {
  signUpSuccess,
  signInSuccess,
  changePasswordSuccess,
  signOutSuccess,
  failure
}