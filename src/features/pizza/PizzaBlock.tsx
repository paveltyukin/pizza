import React, { useState } from 'react'
import { Pizza } from './types'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { addItem, selectItemCount } from '../cart/cartSlice'
import { CartItemProps } from '../cart/types'
import { typeNames } from '../../app/constants'

export type PizzaBlockProps  = Pizza & { children?: React.ReactNode }

export const PizzaBlock = ({ id, imageUrl, title, sizes, types, price }: PizzaBlockProps) => {
  const [doughType, setDoughType] = useState(0)
  const [diameter, setDiameter] = useState(0)
  const dispatch = useAppDispatch()
  const currentItemCount = useAppSelector(selectItemCount(id, doughType, diameter))

  const onCLickAddPizzaToCart = () => {
    const itemForAddToCart: CartItemProps = {
      id,
      imageUrl,
      title,
      price,
      type: doughType,
      size: diameter,
      count: 1
    }

    dispatch(addItem(itemForAddToCart))
  }

  const updateDiameter = (idx: number) => {
    setDiameter(idx)
  }

  const updateDoughType = (idx: number) => {
    setDoughType(idx)
  }

  return (
    <div className='pizza-block-wrapper'>
      <div className="pizza-block">
        <img
          className="pizza-block__image"
          src={imageUrl}
          alt="Pizza"
        />
        <h4 className="pizza-block__title">{title}</h4>
        <div className="pizza-block__selector">
          <ul>
            {types.map((type, idx) => (
              <li
                key={type}
                className={doughType === idx ? 'active' : ''}
                onClick={() => updateDoughType(idx)}
              >{typeNames[ type ]}</li>
            ))}
          </ul>
          <ul>
            {sizes.map((size, idx) => (
              <li
                key={size}
                className={diameter === idx ? 'active' : ''}
                onClick={() => updateDiameter(idx)}
              >{size} см.</li>
            ))}
          </ul>
        </div>
        <div className="pizza-block__bottom">
          <div className="pizza-block__price">от {price} ₽</div>
          <button
            onClick={onCLickAddPizzaToCart}
            className="button button--outline button--add"
          >
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                fill="white"
              />
            </svg>
            <span>Добавить</span>
            <i>{currentItemCount}</i>
          </button>
        </div>
      </div>
    </div>
  )

}
