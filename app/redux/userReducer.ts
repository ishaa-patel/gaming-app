interface UserState {
  name: string;
  email: string;
}

const initialState: UserState = {
  name: '',
  email: '',
};

const userReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 'SET_NAME':
      return {...state, name: action.payload};
    case 'SET_EMAIL':
      return {...state, email: action.payload};
    default:
      return state;
  }
};

export default userReducer;
