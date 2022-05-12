import { Dispatch, SetStateAction } from 'react';

export interface IData {
    id: number
    userId: number
    title: string
    body: string
}

export interface IPagination  {
    totalPosts: number
    currentPage: number
    setCurrentPage: Dispatch<SetStateAction<number>>
}

export interface ItemsProps {
    items: IData[]
}

export interface ISearchPanel {
    setItems: Dispatch<SetStateAction<never[]>>
}

export interface ISearchOptions {
    value: string
    title: string
}
