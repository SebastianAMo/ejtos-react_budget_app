import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
  const { budget, dispatch, expenses, currency } = useContext(AppContext);
  const [budgetValue, setbudgetValue] = useState(budget);

  const handleChange = (e) => {
    const newBudget = parseFloat(e.target.value);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total = total + item.cost);
    }, 0);

    if (!isNaN(newBudget)) {
        if (newBudget > 20000) {
            alert("The value cannot exceed 20000");
        }else if(newBudget < totalExpenses){
            alert("You cannot reduce the budget value lower than the spending");
        } else {
            setbudgetValue(newBudget);
            dispatch({ type: 'SET_BUDGET', payload: newBudget });
        }
    }
  };

  return (
    <div className='alert alert-secondary'>
    <div className="me-0" style={{ display: 'inline-block' }}>
      <span>Budget: {currency}</span>
      <input
        required='required ms-0'
        type='number'
        value={budgetValue}
        step={10}
        style={{ marginLeft: '1rem', width: 100 }}
        onInput={handleChange}
      />
    </div>
  </div>
  );
};

export default Budget;
