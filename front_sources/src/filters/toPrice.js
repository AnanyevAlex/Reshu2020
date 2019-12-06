export const toPrice = (value, from) => {
  const _value = from ? `от ${value} ₽` : `${value} ₽`
  return _value
}