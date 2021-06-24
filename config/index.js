import moment from 'moment'
import 'moment/locale/ru'

export const isObjEmpty = (obj) => Object.keys(obj).length === 0

export const formatDate = (date) => moment(date).locale('ru-RU').format('LL')

export const createMarkup = (str) => ({ __html: str })

export const theme = {
  colors: {
    primary: '#2965CC',
    success: '#0F9960',
    danger: '#D13913',
    gray: '#999',
  },
}
