'use strict'

const getFormFields = require('../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')
const store = require('../scripts/store')

const onSignUp = function (event) {
  event.preventDefault()
  // console.log('Sign up ran!')
  
  const data = getFormFields(this) // this === event.target 
  // console.log(data)
  api.signUp(data)
  .then(ui.signUpSuccess)
  .catch(ui.signUpFailure)
}

const onSignIn = function (event) {
  event.preventDefault()
  // console.log('Sign in ran!')
  
  const data = getFormFields(this) // this === event.target 
  api.signIn(data)
  .then(ui.signInSuccess)
  .catch(ui.signInFailure)
  
}

const onChangePassword = function (event) {
  event.preventDefault()
  // console.log('Change Password ran!')
  
  const data = getFormFields(this) // this === event.target 
  // console.log(data)
  api.changePassword(data)
  .then(ui.changePasswordSuccess)
  .catch(ui.changePasswordFailure)
}

const onSignOut = function (event) {
  event.preventDefault()
  // console.log('Sign put ran!')
  
  api.signOut()
  .then(ui.signOutSuccess)
  .then()
  .catch(ui.failure)
}

const authHandlers = () => {
  $('#sign-up-form').on('submit', onSignUp)
  $('#sign-in-form').on('submit', onSignIn)
  $('#change-password').on('submit', onChangePassword)
  $('#sign-out').click(onSignOut)
}

module.exports = {
  authHandlers
}
