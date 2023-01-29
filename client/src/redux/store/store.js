import { configureStore } from '@reduxjs/toolkit'
import dataPersonalReducer from './dataPersonalSlice'

const store = configureStore({
  reducer: {
    dataPersonal: dataPersonalReducer,
  },
})

export default store
