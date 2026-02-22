export type Item = {
    id: string
    name: string
    title: string
    category: string
    price: number
    image: string
    slug: string
    description: string
    featured?: boolean
}

export const mockItems: Item[] = [
    {
    id: "1",
    title: "string",
    name: "string",
    slug: "product-page",
    price: 9000,
    description: "string",
    category: "string",
    image: "/assets/cat.svg",
    featured: true,
},
{
    id: "2",
    title: "string 2",
    name: "string 2",
    slug: "product-page-2",
    price: 9000,
    description: "string",
    category: "string",
    image: "/assets/cat.svg",
    featured: true,
},
{
    id: "3",
    title: "string 3",
    name: "string 3",
    slug: "product-page-3",
    price: 9000,
    description: "string",
    category: "string",
    image: "/assets/cat.svg",
    featured: true,
},
{
    id: "4",
    title: "string 4",
    name: "string 4",
    slug: "product-page-4",
    price: 9000,
    description: "string",
    category: "string",
    image: "/assets/cat.svg",
    featured: true,
}
]