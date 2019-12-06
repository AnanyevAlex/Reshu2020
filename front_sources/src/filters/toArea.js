export const toArea = (value, from) => {
  const _value = from ? `от ${value} м²` : `${value} м²`
  return _value
}