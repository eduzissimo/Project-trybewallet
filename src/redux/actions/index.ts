import { Dispatch } from '../../types';
import { globalCurrency } from '../../API/fetchAPI';

export const EMAIL_SENT = 'EMAIL_SENT';

export const emailSent = (email: string) => ({
  type: EMAIL_SENT,
  payload: email,
});

export const passwordSent = (password: string) => ({
  type: 'PASSWORD_SENT',
  payload: password,
});

export const expensesSent = (expenses: any) => ({
  type: 'EXPENSES_SENT',
  payload: expenses,
});

export const addExpenses = (currencies: any) => ({
  type: 'ADD_EXPENSES',
  payload: currencies,
});

export const removeExpenses = (id: number) => ({
  type: 'REMOVE_EXPENSES',
  payload: id,
});

export const editExpenses = (id: number) => ({
  type: 'EDIT_EXPENSES',
  payload: id,
});

export const getAPI = () => async (dispatch:Dispatch) => {
  const response = await globalCurrency();
  const updatedCurrencies = Object.keys(response).filter((e) => e !== 'USDT');
  dispatch(addExpenses(updatedCurrencies));
};
