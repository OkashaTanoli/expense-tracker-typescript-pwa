import { Data,Types } from '../types/types'


const Reducer = (state: Data[], action: { type: Types, payload: Data }) => {
    switch (action.type) {
        case 'ADD': {
            return [...state, action.payload]
        }
        case 'REMOVE': {
            return state.filter((val: any) => val.id !== action.payload)
        }
        default:
            return state
    }
}
export default Reducer