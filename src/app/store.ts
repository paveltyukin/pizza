import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import pizzaReducer from '../features/pizza/pizzaSlice'
import { pizzaApi } from '../features/pizza/pizzaApi'

export const store = configureStore({
  reducer: {
    pizza: pizzaReducer,
    [ pizzaApi.reducerPath ]: pizzaApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(pizzaApi.middleware),

})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
