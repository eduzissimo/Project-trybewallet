import { AnyAction } from 'redux';
import { EMAIL_SENT } from '../actions';

const initialState = {
  email: 'teste@email.com',
};

export const setEmail = (email: string) => ({
  type: 'SET_EMAIL',
  payload: email,
});

const user = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case EMAIL_SENT:
      return {
        ...state,
        email: action.payload,
      };
    default:
      return state;
  }
};

export default user;
