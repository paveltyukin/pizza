export interface CartItemProps {
    id: number
    title: string
    imageUrl: string
    type: number
    size: number
    price: number
    count: number
}

export interface CartState {
    totalPrice: number
    items: CartItemProps[]
}

export interface UniqueCartItem {
    id: number,
    type: number,
    size: number
}
