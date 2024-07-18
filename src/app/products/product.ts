export interface IProduct {
    id: number,
    title: string,
    price: number,
    description: string,
    category: string,
    image: string,
    rating: IRating,

    // mark as favorite
    isFavorite?: boolean
}

interface IRating {
    rate: number,
    count: number
}