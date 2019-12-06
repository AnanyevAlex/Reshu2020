export const toRoom = value => {
  return value !== '0' ? `${value}-к` : 'Ст.'
}