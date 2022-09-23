import {
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
} from './form'

function validateName(target) {
  const numberRegex = /[0-9]/g

  if (target.value === '') {
    return {
      isValid: false,
      error: 'Por favor ingresa tu nombre.',
    }
  }
  if (target.value.length < 3) {
    return {
      isValid: false,
      error: 'El nombre debe tener al menos 3 letras.',
    }
  }
  if (numberRegex.test(target.value)) {
    return {
      isValid: false,
      error: 'El nombre debe contener solo letras y espacios.',
    }
  }

  return {
    isValid: true,
    error: null,
  }
}
function nameEventFunction(element) {
  console.log(element)
  const { isValid: isNameValid, error: errorMessage } = validateName(element)

  if (!isNameValid) {
    $nameError.textContent = errorMessage
    $nameError.classList.add('show-error')
    $formName.classList.add('newsletter__input-error')
  } else {
    $nameError.textContent = ''
    $nameError.classList.remove('show-error')
    $formName.classList.remove('newsletter__input-error')
  }
}

function validateEmail(target) {
  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
  if (target.value === '') {
    return {
      isValid: false,
      error: 'Por favor ingresa tu email.',
    }
  }

  if (!emailRegex.test(target.value)) {
    return {
      isValid: false,
      error: 'Debe ser un email valido.',
    }
  }
  return {
    isValid: true,
    error: null,
  }
}

function emailEventFunction(element) {
  console.log(element)
  const { isValid: isEmailValid, error: errorMessage } = validateEmail(element)

  if (!isEmailValid) {
    $emailError.textContent = errorMessage
    $emailError.classList.add('show-error')
    $formEmail.classList.add('newsletter__input-error')
  } else {
    $emailError.textContent = ''
    $emailError.classList.remove('show-error')
    $formEmail.classList.remove('newsletter__input-error')
  }
}

function validateIdentification(target) {
  if (target.value === '') {
    return {
      isValid: false,
      error: 'Por favor selecciona un tipo de identificación.',
    }
  }

  return {
    isValid: true,
    error: null,
  }
}
function identificationEventFunction(element) {
  console.log(element)
  const { isValid: isIdentificationValid, error: errorMessage } =
    validateIdentification(element)

  if (!isIdentificationValid) {
    $identificationError.textContent = errorMessage
    $identificationError.classList.add('show-error')
    $formIdentification.classList.add('newsletter__input-error')
  } else {
    $identificationError.textContent = ''
    $identificationError.classList.remove('show-error')
    $formIdentification.classList.remove('newsletter__input-error')
    $formIdentificationNumber.removeAttribute('disabled')
    $formIdentificationNumber.classList.remove('disabled')
  }
}
function validateIdentificationNumber(target) {
  if (target.value === '') {
    return {
      isValid: false,
      error: 'Por favor introduce tu número de identificación.',
    }
  }
  if (target.value.length > 10) {
    return {
      isValid: false,
      error: 'Debe contener máximo 10 dígitos.',
    }
  }

  return {
    isValid: true,
    error: null,
  }
}
function identificationNumberEventFunction(element) {
  console.log(element)
  const { isValid: isIdentificationNumberValid, error: errorMessage } =
    validateIdentificationNumber(element)

  if (!isIdentificationNumberValid) {
    $identificationNumberError.textContent = errorMessage
    $identificationNumberError.classList.add('show-error')
    $formIdentificationNumber.classList.add('newsletter__input-error')
  } else {
    $identificationNumberError.textContent = ''
    $identificationNumberError.classList.remove('show-error')
    $formIdentificationNumber.classList.remove('newsletter__input-error')
  }
}
function validatePhone(target) {
  if (target.value === '') {
    return {
      isValid: false,
      error: 'Por favor introduce tu número de teléfono.',
    }
  }
  if (target.value.length > 10) {
    return {
      isValid: false,
      error: 'Debe contener máximo 10 dígitos.',
    }
  }

  return {
    isValid: true,
    error: null,
  }
}
function phoneEventFunction(element) {
  console.log(element)
  const { isValid: isPhoneNumberValid, error: errorMessage } =
    validatePhone(element)

  if (!isPhoneNumberValid) {
    $phoneNumberError.textContent = errorMessage
    $phoneNumberError.classList.add('show-error')
    $formPhone.classList.add('newsletter__input-error')
  } else {
    $phoneNumberError.textContent = ''
    $phoneNumberError.classList.remove('show-error')
    $formPhone.classList.remove('newsletter__input-error')
  }
}

function validateConditions(element) {
  if (!element.checked) {
    $conditionsError.textContent = 'Por favor acepta los términos y condiciones'
    $conditionsError.classList.add('show-error')
    $formConditions.classList.add('newsletter__input-error')
  } else {
    $conditionsError.textContent = ''
    $conditionsError.classList.remove('show-error')
    $formConditions.classList.remove('newsletter__input-error')
  }
}

$formName.addEventListener('input', e => nameEventFunction(e.target))
$formName.addEventListener('blur', e => nameEventFunction(e.target))
$formEmail.addEventListener('input', e => emailEventFunction(e.target))
$formEmail.addEventListener('blur', e => emailEventFunction(e.target))
$formIdentification.addEventListener('blur', e =>
  identificationEventFunction(e.target)
)

document.addEventListener('DOMContentLoaded', () => {
  const { isValid } = validateIdentification($formIdentification)

  if (!isValid) {
    $formIdentificationNumber.setAttribute('disabled', '')
    $formIdentificationNumber.classList.add('disabled')
  }
})

$formIdentificationNumber.addEventListener('keypress', e => {
  console.log(e)
  if (e.key === '.' || e.key === 'e') {
    e.preventDefault()
  }
})

$formIdentificationNumber.addEventListener('blur', e =>
  identificationNumberEventFunction(e.target)
)
$formIdentificationNumber.addEventListener('input', e =>
  identificationNumberEventFunction(e.target)
)

$formPhone.addEventListener('blur', e => phoneEventFunction(e.target))
$formPhone.addEventListener('input', e => phoneEventFunction(e.target))

console.log($formConditions.value)
$formConditions.addEventListener('input', e => {
  console.log(e.target.value)
  console.log(e.target.checked)
})

$formConditions.addEventListener('blur', e => validateConditions(e.target))
$formConditions.addEventListener('change', e => validateConditions(e.target))

function displayThankyouMessage() {
  const message = document.createElement('P')
  message.classList.add('newsletter__thank-you')
  message.textContent = 'Gracias por suscribirte a nuestro newsletter.'

  $form.insertAdjacentElement('afterend', message)
}

$form.addEventListener('submit', e => {
  e.preventDefault()
  nameEventFunction($formName)
  emailEventFunction($formEmail)
  identificationEventFunction($formIdentification)
  identificationNumberEventFunction($formIdentificationNumber)
  phoneEventFunction($formPhone)
  validateConditions($formConditions)

  const { isValid: isNameValid } = validateName($formName)
  const { isValid: isEmailValid } = validateName($formEmail)
  const { isValid: isIdentificationValid } =
    validateIdentification($formIdentification)
  const { isValid: isIdentificationNumberValid } = validateIdentification(
    $formIdentificationNumber
  )
  const { isValid: isPhoneNumberValid } = validateIdentification($formPhone)
  const isConditionsValid = $formConditions.checked

  const inputValues = [
    isNameValid,
    isEmailValid,
    isIdentificationValid,
    isIdentificationNumberValid,
    isPhoneNumberValid,
    isConditionsValid,
  ]

  for (const value of inputValues) {
    if (!value) return
  }
  displayThankyouMessage()
  $form.reset()
})
