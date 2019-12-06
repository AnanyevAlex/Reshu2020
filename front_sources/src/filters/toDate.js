import { format } from 'date-fns'

export const toDate = (value, action = false) => {
  const _value = value !== '0000-00-00 00:00:00' ? format(new Date(String(value)), 'dd.MM.yyyy') : value
  return action ? `до ${_value}` : _value
}