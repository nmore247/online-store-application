export interface IProduct {
    id: number,
    title: string,
    price: number,
    description: string,
    category: string,
    image: string,
    rating: IRating,

    // additional properties
    isFavorite?: boolean
    quantity?: number
}

interface IRating {
    rate: number,
    count: number
}