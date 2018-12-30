import moment from 'moment'

export default [{
  id: '1',
  description: 'Gum',
  note: '',
  amount: 195,
  createdAt: 0
},
{
  id: '2',
  description: 'Rent',
  note: 'some note',
  amount: 679500,
  createdAt: moment(0).subtract(4, 'days').valueOf()
},
{
  id: '3',
  description: 'Car payment',
  note: 'sucks',
  amount: 225000,
  createdAt: moment(0).add(4, 'days').valueOf()
}]
