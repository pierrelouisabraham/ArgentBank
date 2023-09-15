// import { createStore, applyMiddleware } from 'redux';
// import rootReducer from './rootReducer';
// import thunk from 'redux-thunk'; // Redux Thunk pour les actions asynchrones


// const store = createStore(rootReducer, applyMiddleware(thunk));

// export default store;
import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../features/auth/authSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer
  },
})