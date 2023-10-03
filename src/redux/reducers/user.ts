import { AnyAction } from 'redux';
import { EMAIL_SENT } from '../actions';

const INITIAL_STATE = {
  email: 'teste@email.com',
};

const user = (state = INITIAL_STATE, action: AnyAction) => {
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
