import { CartItemProps, CartState, UniqueCartItem } from './types'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../../app/store'

const initialState: CartState = {
  totalPrice: 0,
  items: []
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    clearCart: (state) => {
      state.items = []
      state.totalPrice = 0
    },
    setTotalPrice: (state, { payload }: PayloadAction<number>) => {
      state.totalPrice = payload
    },
    addItem: (state, { payload }: PayloadAction<CartItemProps>) => {
      const foundedIndex = state.items.findIndex(item => item.id === payload.id && item.type === payload.type && item.size === payload.size)
      if (foundedIndex !== -1) {
        state.items[ foundedIndex ].count += 1
      } else {
        state.items.push({ ...payload, count: 1 })
      }

      state.totalPrice = state.items.reduce((sum, obj) => obj.price * obj.count + sum, 0)
    },
    deleteItem: (state, { payload }: PayloadAction<UniqueCartItem>) => {
      const foundedIndex = state.items.findIndex(item => item.id === payload.id && item.type === payload.type && item.size === payload.size)
      if (foundedIndex !== -1) {
        state.items.splice(foundedIndex, 1)
      }

      state.totalPrice = state.items.reduce((sum, obj) => obj.price * obj.count + sum, 0)
    },
    deleteItemForUpdateCount: (state, { payload }: PayloadAction<UniqueCartItem>) => {
      const foundedIndex = state.items.findIndex(item => item.id === payload.id && item.type === payload.type && item.size === payload.size)
      if (foundedIndex !== -1) {
        state.items[ foundedIndex ].count -= 1
      }

      state.totalPrice = state.items.reduce((sum, obj) => obj.price * obj.count + sum, 0)
    },
    addItemForUpdateCount: (state, { payload }: PayloadAction<UniqueCartItem>) => {
      const foundedIndex = state.items.findIndex(item => item.id === payload.id && item.type === payload.type && item.size === payload.size)
      if (foundedIndex !== -1) {
        state.items[ foundedIndex ].count += 1
      }

      state.totalPrice = state.items.reduce((sum, obj) => obj.price * obj.count + sum, 0)
    },
  },
})

export const { addItem, clearCart, deleteItem, deleteItemForUpdateCount, addItemForUpdateCount } = cartSlice.actions

export const selectTotalPrice = (state: RootState) => state.cart.totalPrice
export const selectItems = (state: RootState) => state.cart.items
export const selectAllPizzaCount = (state: RootState) => state.cart.items.reduce((sum, obj) => obj.count + sum, 0)
export const selectItemCount = (id: number, type: number, size: number) => (state: RootState) =>
  state.cart.items.find(item => item.id === id && item.type === type && item.size === size)?.count ?? 0

export default cartSlice.reducer
