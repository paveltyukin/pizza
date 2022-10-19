import React from 'react'

const categories = [
  'Все',
  'Мясные',
  'Вегетарианская',
  'Гриль',
  'Острые',
  'Закрытые'
]

export const Categories = () => {

  const [categoryIndex, setCategoryIndex] = React.useState(0)

  return (
    <div className="categories">
      <ul>
        {categories.map((category, idx) => {
          return (
            <li
              onClick={() => setCategoryIndex(idx)}
              key={idx}
              className={idx === categoryIndex ? 'active' : ''}
            >{category}</li>
          )
        })}
      </ul>
    </div>
  )
}
