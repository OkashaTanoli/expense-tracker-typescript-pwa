import { type } from "os"

export type Data = {
    name: string,
    amount: number,
    id: number
}

export type Context = {
    state: Data[],
    dispatch: React.Dispatch<any>
}

export enum Types {
    A = 'ADD', R = 'REMOVE'
}

