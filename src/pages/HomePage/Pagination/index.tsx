import ReactPaginate from 'react-paginate'
import $class from './Pagination.module.scss'
import { useAppDispatch } from '../../../app/hooks'
import { setCurrentPage } from '../../../features/pizza/pizzaSlice'

export const Pagination = () => {
  const dispatch = useAppDispatch()

  return (
    <ReactPaginate
      className={$class.root}
      breakLabel="..."
      nextLabel=">"
      onPageChange={(e) => dispatch(setCurrentPage(e.selected  + 1))}
      pageRangeDisplayed={4}
      pageCount={3}
      previousLabel="<"
    />
  )
}
