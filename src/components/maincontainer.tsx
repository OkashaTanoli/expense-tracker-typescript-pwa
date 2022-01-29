import React from 'react';
import './maincontainer.css'
import TotalAmount from './TotalAamount/totalammount'
import IncomeExpense from './IncomeExpense/incomeexpense'
import History from './History/history';
import Transaction from './AddNewTransaction/newtransaction'


function MainContainer() {
  return (
    <div className="Main">
      <TotalAmount />
      <IncomeExpense />
      <History />
      <Transaction />
    </div>
  );
}

export default MainContainer;
