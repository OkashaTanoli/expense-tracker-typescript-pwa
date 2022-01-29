import React, { createContext, useReducer } from "react";
import Reducer from "./reducer";
import { Data, Context } from '.././types/types'


const data: Data[] = [
    // { name: 'okasha', amount: -100, id: 3862762874873 },
    // { name: 'okasha', amount: 100, id: 386272874873 },
    // { name: 'okasha', amount: -50, id: 386276342874873 },
    // { name: 'okasha', amount: 160, id: 38324324874873 },
]

export const ContextApi = createContext<Context>({ state: data, dispatch: () => null });

export const CreateContext = ({ children }: any) => {
    const [state, dispatch] = useReducer(Reducer, data);
    return (
        <ContextApi.Provider value={{ state, dispatch }}>
            {children}
        </ContextApi.Provider>
    )

}