import $class from './Search.module.scss'
import { ChangeEvent } from 'react'
import { useAppDispatch, useAppSelector } from '../../../app/hooks'
import { selectSearch, setSearch } from '../../../features/pizza/pizzaSlice'

export const Search = () => {
  const search = useAppSelector(selectSearch)
  const dispatch = useAppDispatch()

  return (
    <div className={$class.root}>
      <label htmlFor='global-search' className={$class.searchIcon}>
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <title/>
          <g data-name="Layer 2" id="Layer_2">
            <path d="M18,10a8,8,0,1,0-3.1,6.31l6.4,6.4,1.41-1.41-6.4-6.4A8,8,0,0,0,18,10Zm-8,6a6,6,0,1,1,6-6A6,6,0,0,1,10,16Z"/>
          </g>
        </svg>
      </label>
      <input
        value={search}
        onChange={(e: ChangeEvent<HTMLInputElement>) => dispatch(setSearch(e.target.value))}
        id='global-search'
        className={$class.input}
        placeholder='Поиск пиццы'
      />
      {search && (
        <svg
          onClick={() => dispatch(setSearch(''))}
          className={$class.closeIcon}
          viewBox="0 0 32 32"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
          </defs>
          <title/>
          <g id="cross">
            <line className={$class.cls} x1="7" x2="25" y1="7" y2="25"/>
            <line className={$class.cls} x1="7" x2="25" y1="25" y2="7"/>
          </g>
        </svg>
      )}
    </div>

  )
}
