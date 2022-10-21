import { Categories } from './Categories'
import { PizzaBlock } from '../../features/pizza/PizzaBlock'
import { Sort } from './Sort'
import { useEffect } from 'react'
import { Skeleton } from '../../features/pizza/Skeleton'
import { Pagination } from './Pagination'
import { selectCategoryId, selectCurrentPage, selectSearch, selectSort } from '../../features/pizza/pizzaSlice'
import { useAppSelector } from '../../app/hooks'
import { useGetPizzasQuery } from '../../features/pizza/pizzaApi'
import { useNavigate } from 'react-router-dom'

interface UrlParams {
  category?: number
  sortBy?: string
  order?: string
  search?: string
  page?: number
  limit?: number
}

export const HomePage = () => {
  const categoryId = useAppSelector(selectCategoryId)
  const sort = useAppSelector(selectSort)
  const currentPage = useAppSelector(selectCurrentPage)
  const search = useAppSelector(selectSearch)

  const navigate = useNavigate()
  const searchParams = location.search
  const { data, isLoading } = useGetPizzasQuery(searchParams)

  useEffect(() => {
    const urlParams: UrlParams = {}
    if (categoryId) {
      urlParams.category = categoryId
    }

    if (sort && sort.name) {
      urlParams.sortBy = sort.sortProperty
      urlParams.order = sort.orderType
    }

    if (search) {
      urlParams.search = search
    }

    if (currentPage) {
      urlParams.page = currentPage
      urlParams.limit = 4
    }

    const searchParams = (Object.keys(urlParams) as Array<keyof typeof urlParams>).map(key => `${key}=${urlParams[ key ]}`).join('&')
    if (searchParams) {
      navigate({ search: `?${searchParams}` })
    }
  }, [categoryId, sort, search, currentPage])

  return (
    <>
      <div className="content__top">
        <Categories />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {
          isLoading
            ? [... new Array(6)].map((_, idx) => <Skeleton key={idx}/>)
            : data?.map(pizza => <PizzaBlock key={pizza.id} {...pizza} />)
        }
      </div>
      <Pagination />
    </>
  )
}