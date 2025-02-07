export interface Product {
    id: number,
    title: string,
    price: number,
    description: string,
    category: string,
    image: string,
    rating: Rating,

    // additional properties
    isFavorite?: boolean
    quantity?: number
}

interface Rating {
    rate: number,
    count: number
}
