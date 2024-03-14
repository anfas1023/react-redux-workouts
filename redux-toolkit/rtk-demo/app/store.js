const configureStore = require('@reduxjs/toolkit').configureStore
const reduxLogger=require('redux-logger')

const cakeReducer = require('../features/cake/cakeslice');
const creamReducer=require('../features/iceCream/cream');

const userReducer=require('../features/users/user')

const logger=reduxLogger.createLogger()
const store = configureStore({
  reducer: {
    cake: cakeReducer,
    cream:creamReducer,
    user:userReducer,
  },
  // middleware:(getDefaultMiddleware) =>getDefaultMiddleware().concat(logger),



})

module.exports = store

// middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
