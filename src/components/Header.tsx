import React from 'react';
import { useSelector } from 'react-redux';

function Header() {
  const userEmail = useSelector((state: any) => state.user.email);
  const totalExpense = 0;
  const currency = 'BRL';

  return (
    <header>
      <div data-testid="email-field">{ userEmail }</div>
      <div data-testid="total-field">{ totalExpense }</div>
      <div data-testid="header-currency-field">{ currency }</div>
    </header>
  );
}

export default Header;
