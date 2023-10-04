import React from 'react';
import { useSelector } from 'react-redux';
import { User } from '../types';

function Header() {
  const userEmail = useSelector((state: any) => state.user.email);
  const { expenses } = useSelector((state: User) => state.wallet);
  let totalValue = 0;
  expenses.forEach(({ value, currency, exchangeRates }: any) => {
    totalValue += Number(value) * exchangeRates[currency].ask;
  });

  return (
    <div>
      <h2 data-testid="email-field">{`Email: ${userEmail}`}</h2>
      <h2 data-testid="total-field">{ totalValue.toFixed(2) }</h2>
      <h2 data-testid="header-currency-field">BRL</h2>
    </div>
  );
}

export default Header;
