const $form = document.querySelector('#newsletterForm')

const $formName = document.querySelector('#name')
const $formEmail = document.querySelector('#email')
const $formIdentification = document.querySelector('#identification')
const $formIdentificationNumber = document.querySelector(
  '#identificationNumber'
)
const $formPhone = document.querySelector('#phone')
const $formConditions = document.querySelector('#conditions')

const $nameError = document.querySelector('#nameError')
const $emailError = document.querySelector('#emailError')
const $identificationError = document.querySelector('#identificationError')
const $identificationNumberError = document.querySelector(
  '#identificationNumberError'
)
const $phoneNumberError = document.querySelector('#phoneError')
const $conditionsError = document.querySelector('#conditionsError')

export {
  $form,
  $formName,
  $formEmail,
  $formIdentification,
  $formIdentificationNumber,
  $formPhone,
  $formConditions,
  $nameError,
  $emailError,
  $identificationError,
  $identificationNumberError,
  $phoneNumberError,
  $conditionsError,
}
