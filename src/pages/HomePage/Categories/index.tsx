import React from 'react'
import { useAppDispatch, useAppSelector } from '../../../app/hooks'
import { selectCategoryId, setCategoryId } from '../../../features/pizza/pizzaSlice'

const categories = [
  'Все',
  'Мясные',
  'Вегетарианская',
  'Гриль',
  'Острые',
  'Закрытые'
]

export const Categories = () => {
  const categoryId = useAppSelector(selectCategoryId)
  const dispatch = useAppDispatch()

  return (
    <div className="categories">
      <ul>
        {categories.map((category, idx) => {
          return (
            <li
              onClick={() => dispatch(setCategoryId(idx))}
              key={idx}
              className={idx === categoryId ? 'active' : ''}
            >{category}</li>
          )
        })}
      </ul>
    </div>
  )
}
