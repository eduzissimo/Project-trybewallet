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

export type Dispatch = ThunkDispatch<User, null, AnyAction>;
