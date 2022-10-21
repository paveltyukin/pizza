import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import pizzaReducer from '../features/pizza/pizzaSlice'
import cartReducer from '../features/cart/cartSlice'
import { pizzaApi } from '../features/pizza/pizzaApi'
import { setupListeners } from '@reduxjs/toolkit/query'

export const store = configureStore({
  reducer: {
    pizza: pizzaReducer,
    cart: cartReducer,
    [ pizzaApi.reducerPath ]: pizzaApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(pizzaApi.middleware),

})

setupListeners(store.dispatch)

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

