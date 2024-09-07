const maskCurrency = (valor, locale = 'pt-BR', currency = 'BRL') => {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency
  }).format(valor)
}

export const moneyMask = (value) => {
  if (!value) return value
  const onlyDigits = value
    .split("")
    .filter(s => /\d/.test(s))
    .join("")
    .padStart(3, "0")
  const digitsFloat = onlyDigits.slice(0, -2) + "." + onlyDigits.slice(-2)
  value = maskCurrency(digitsFloat)
  return value
}

// const onlyDigits = value.value.split('')
//   .filter(s => /\d/.test(s))
//   .join('')
//
// const finalValue = onlyDigits.slice(0, -2) + '.' + onlyDigits.slice(-2)