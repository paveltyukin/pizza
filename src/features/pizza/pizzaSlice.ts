import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../../app/store'
import { Pizza, PizzaState, SortListItem } from './types'
import { sortList } from '../../app/constants'

const initialState: PizzaState = {
  search: '',
  categoryId: 0,
  sort: sortList[ 3 ],
  currentPage: 1,
  pizzas: [],
  isLoading: false
}

export const pizzaSlice = createSlice({
  name: 'pizza',
  initialState,
  reducers: {
    setCategoryId: (state, { payload }: PayloadAction<number>) => {
      state.categoryId = payload
    },
    setSearch: (state, { payload }: PayloadAction<string>) => {
      state.search = payload
    },
    setSort: (state, { payload }: PayloadAction<SortListItem>) => {
      state.sort = payload
    },
    setCurrentPage: (state, { payload }: PayloadAction<number>) => {
      state.currentPage = payload
    },
    setPizzas: (state, { payload }: PayloadAction<Pizza[]>) => {
      state.pizzas = payload
    },
    setLoading: (state, { payload }: PayloadAction<boolean>) => {
      state.isLoading = payload
    },
  },
})

export const { setCategoryId, setSearch, setSort, setCurrentPage, setPizzas, setLoading } = pizzaSlice.actions

export const selectCategoryId = (state: RootState) => state.pizza.categoryId
export const selectSearch = (state: RootState) => state.pizza.search
export const selectSort = (state: RootState) => state.pizza.sort
export const selectCurrentPage = (state: RootState) => state.pizza.currentPage
export const selectPizzas = (state: RootState) => state.pizza.pizzas
export const selectLoading = (state: RootState) => state.pizza.isLoading

export default pizzaSlice.reducer
