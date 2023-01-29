import { createSlice } from '@reduxjs/toolkit'

export const dataPersonalSlice = createSlice({
  name: 'dataPersonal',
  initialState: {},
  reducers: {
    saveDataPersonal: (state, action) => {
      state = action.payload
    },
  },
})

export const { saveDataPersonal } = dataPersonalSlice.actions

export default dataPersonalSlice.reducer