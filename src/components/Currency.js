import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const CurrencyDropdown = () => {
  const { dispatch, currency } = useContext(AppContext);

  const handleCurrencyChange = (e) => {
    const newCurrency = e.target.value;
    dispatch({ type: 'CHG_CURRENCY', payload: newCurrency });
  };

  return (
      <div style={{ background: '#d1e7dd', padding: '0.5rem', borderRadius: '0.25rem', textAlign: 'right' }}>
        <select
          id="currencySelect"
          className="form-select"
          value={currency}
          onChange={handleCurrencyChange}
          style={{ backgroundColor: '#d1e7dd', border: 'none', outline: 'none' }}
        >
          <option value="$">$ Dollar</option>
          <option value="£">£ Pound</option>
          <option value="€">€ Euro</option>
          <option value="₹">₹ Rupee</option>
        </select>
      </div>
  );
};

export default CurrencyDropdown;
