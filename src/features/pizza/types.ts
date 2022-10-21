export interface Pizza {
    id: number,
    imageUrl: string,
    title: string,
    types: number[],
    sizes: number[],
    price: number,
    category: number,
    rating: number
}

export interface PizzaState {
    search: string
    categoryId: number
    sort: SortListItem
    currentPage: number
    pizzas: Pizza[]
    isLoading: boolean
}

export interface SortListItem {
    name: string
    sortProperty: string
    orderType: string
}
