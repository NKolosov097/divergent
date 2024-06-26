export interface IComment {
    id: number | string
    author: string
    body: string
    createdAt: string
}

export interface IArticle {
    id: number | string
    photoUrl?: string
    title: string
    body: string
    description?: string
    author: string
    createdAt: string
    likes: number
    comments: IComment[]
}