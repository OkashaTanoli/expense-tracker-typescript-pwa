import React, { useContext } from 'react';
import '../maincontainer.css'
import { TiDelete } from 'react-icons/ti'
import { ContextApi } from '../../store/context'
import { Context} from '../../types/types'

function MinusRemover(val: number): number {
    let split: string[] = val.toString().split('')
    const filter = split.filter((value: string): boolean => {
        return value !== '-'
    })
    return Number(filter.join(''))
}


function History() {
    const { state, dispatch } = useContext<Context>(ContextApi)

    const Remover = (id: number):void => {
        dispatch({ type: 'REMOVE', payload: id })
    }

    return (
        <div className="history">
            <h2 style={{ lineHeight: '10px' }}>History</h2>
            <hr />

            <ul className='historyDiv'>
                {
                    state.map((val, ind) => {
                        return (
                            <li key={ind}>
                                <div className={val.amount.toString().charAt(0) === '-' ? 'borderColorExpense' : 'borderColorIncome'}></div>
                                <div>{val.name}</div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <div>{MinusRemover(val.amount)}</div>
                                    <TiDelete onClick={() => { Remover(val.id) }} className='deleteButton' style={{ marginRight: '-20px', marginLeft: '10px' }} />
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    );
}

export default History;