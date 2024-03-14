import  {configureStore} from '@reduxjs/toolkit'
// import {reduxLogger,createLogger} from 'redux-logger'

// const cakeReducer = require('../features/cake/cakeslice');
import cakeReducer from '../features/cake/cakeslice'
// const creamReducer=require('../features/iceCream/cream');
import creamReducer from '../features/iceCream/cream'

// const userReducer=require('../features/users/user')
import userReducer from '../features/users/user'

// const logger=createLogger();
const store = configureStore({
  reducer: {
    cake: cakeReducer,
    cream:creamReducer,
    user:userReducer,
  },
  // middleware:(getDefaultMiddleware) =>getDefaultMiddleware().concat(logger),
})

// module.exports = store

export default store
export type RootState=ReturnType<typeof store.getState>
export type AppDispatch=typeof store.dispatch

// middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
