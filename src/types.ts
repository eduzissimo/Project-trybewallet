import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';

export type User = {
  user: {
    email: string,
    password: string,
  },
  wallet: {
    currencies: string[];
    expenses: object[];
    editor: boolean;
    idToEdit: number;
  }
};

export type GlobalState = {
  user: User,
  wallet: User,
};

export type ExpenseType = {
  id?: number;
  exchangeRates: any;
  value: string;
  description: string;
  currency: string;
  method: string;
  tag: string;
};

export type Dispatch = ThunkDispatch<User, null, AnyAction>;
