import { AnyAction } from 'redux';

const INITIAL_STATE = {
  expenses: [],
  currencies: [],
};

export const wallet = (state = INITIAL_STATE, action: AnyAction) => {
  switch (action.type) {
    case 'EXPENSES_SENT': {
      return {
        ...state,
        expenses: [...state.expenses, action.payload],
      };
    }
    case 'ADD_EXPENSES': {
      return {
        ...state,
        currencies: action.payload,
      };
    }
    case 'REMOVE_EXPENSES': {
      return {
        ...state,
        expenses: state.expenses.filter((e: any) => e.id !== action.payload),
      };
    }
    default: return state;
  }
};
