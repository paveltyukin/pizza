import { SortListItem } from '../features/pizza/types'

export const sortList: SortListItem[] = [
  { name: 'популярности (по убыванию)', sortProperty: 'rating', orderType: 'desc' },
  { name: 'популярности (по возрастанию)', sortProperty: 'rating', orderType: 'asc' },
  { name: 'цене (по убыванию)', sortProperty: 'price', orderType: 'desc' },
  { name: 'цене (по возрастанию)', sortProperty: 'price', orderType: 'asc' },
  { name: 'алфавиту (по убыванию)', sortProperty: 'title', orderType: 'desc' },
  { name: 'алфавиту (по возрастанию)', sortProperty: 'title', orderType: 'asc' }
]
