import React, { useContext } from 'react';
import '../maincontainer.css'
import { ContextApi } from '../../store/context'
import { Data } from '../../types/types'
import { Context } from '../../types/types'

function IncomeExpense() {
    let { state } = useContext<Context>(ContextApi)
    const Income = (): number => {
        let a: number = 0
        for (var i = 0; i < state.length; i++) {
            if (state[i].amount > 0) {
                a = a + Number(state[i].amount)
            }
        }
        return a
    }
    const Expense = (): number => {
        let a:number = 0
        for (var i = 0; i < state.length; i++) {
            if (state[i].amount < 0) {
                a = a + Number(state[i].amount)
            }
        }
        let split:string[] = a.toString().split('')
        const filter:string[] = split.filter((value):boolean => {
            return value !== '-'
        })
        return Number(filter.join(''))
    }

    return (
        <div className='IncomeExpense'>
            <div className='IncomeExpenseOne'>
                <div style={{ overflow: 'auto' }}>
                    <h4 className='incomeHead'>INCOME</h4>
                    <h2 style={{ lineHeight: '10px', textAlign: 'center' }}>{Income()}</h2>
                </div>
            </div>
            <div className='IncomeExpenseTwo'></div>
            <div className='IncomeExpenseThree'>
                <div style={{ overflow: 'auto' }}>
                    <h4 className='expenseHead'>EXPENSE</h4>
                    <h2 style={{ lineHeight: '10px', textAlign: 'center' }}>{Expense()}</h2>
                </div>
            </div>
        </div>
    );
}

export default IncomeExpense;