import React, { useContext, useState } from 'react';
import { ContextApi } from '../../store/context';
import '../maincontainer.css';
import { Context } from '../../types/types';

function NewTransaction() {
    const [text, setText] = useState<string>('')
    const [amount, setAmount] = useState<number|string>(0)
    const { dispatch } = useContext<Context>(ContextApi)


    const SetAdding = (): void => {
        let randomNum: number = Math.random() * 342342343242435;
        randomNum = Math.floor(randomNum)
        dispatch({ type: 'ADD', payload: { name: text, amount: amount, id: randomNum } })
    }

    const CheckingEmpty = (): void => {
        var a: number = 0
        var b: number;
        for (var i = amount.toString().slice(0, 1) === '-' ? 1 : 0; i < amount.toString().length; i++) {
            if (amount.toString()[i] === '0') {
                a = a + 1
            }
        }
        amount.toString().slice(0, 1) === '-' ? b = amount.toString().length - 1 : b = amount.toString().length
        if (text === '' || b === a) {
            alert('Please fill all fields or inter correct value')
        }
        else {
            SetAdding()
            setText('')
            setAmount(0)
            // console.log(amount)
        }
        a = 0
    }

    const HandleKey = (event:React.KeyboardEvent<HTMLInputElement>):void => {
        if (event.key === "Enter") {
            CheckingEmpty()
        }
    }

    return (
        <div>
            <h2 style={{ lineHeight: '10px' }}>Add Transaction</h2>
            <hr />
            <div >
                <h4 style={{ lineHeight: '0px', color: '#575757', marginBottom: '10px' }}>Text</h4>
                <input onKeyPress={(event) => {HandleKey(event)}} value={text} onChange={(e:React.ChangeEvent<HTMLInputElement>) => { setText(e.target.value) }} placeholder='Enter Text' className='inputField' required type="text" />
            </div>
            <div>
                <h4 style={{ lineHeight: '0px', color: '#575757', marginBottom: '10px' }}>Amount</h4>
                <input onKeyPress={(event) => {HandleKey(event)}} value={amount} onChange={(e:React.ChangeEvent<HTMLInputElement>) => { setAmount(Number(e.target.value)) }} placeholder='Enter Amount' className='inputField' required type="number" />
                <p style={{ marginTop: '0px', color: '#424242' }}>Negative amount for (Expense) and Positive for (Income)</p>
            </div>
            <div style={{ width: '100%' }}>
                <input onClick={() => { CheckingEmpty() }} type="button" value="Add Transaction" className='submitButton' />
            </div>
        </div>
    );
}

export default NewTransaction;