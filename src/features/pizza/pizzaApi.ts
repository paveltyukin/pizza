import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Pizza } from './types'
import { setPizzas } from './pizzaSlice'

export const pizzaApi = createApi({
  reducerPath: 'pizzaApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://63510818dfe45bbd55b4a818.mockapi.io/items' }),
  endpoints: (builder) => ({
    getPizzas: builder.query<Pizza[], string>({
      query(name) {
        return name
      },
      async onQueryStarted(id, { dispatch, queryFulfilled }) {
        const { data } = await queryFulfilled
        dispatch(setPizzas(data))
      }
    }),
  }),
})

export const { useGetPizzasQuery } = pizzaApi