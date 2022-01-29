import React, { useContext } from 'react';
import { ContextApi } from '../../store/context';
import '../maincontainer.css'
import { Context } from '../../types/types';


function TotalAmount() {
    let { state } = useContext<Context>(ContextApi)

    const Total = ():number => {
        var a:number = 0
        for (var i = 0; i < state.length; i++) {
            a = a + state[i].amount
        }
        return a
    }
    return (
        <div className='totalAmount'>
            <h1>Expense Tracker With PWA</h1>
            <h5>YOUR BALANCE</h5>
            <h1 style={{ marginTop: '-20px' }}>$ {Total()}</h1>
        </div>
    );
}

export default TotalAmount;
