import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  color: "black"
}

export const themeSlice = createSlice({
//any name
  name: 'themeUI',
  initialState,
  reducers: {
    changeColor: (state, action) => {
      state.color = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { changeColor } = themeSlice.actions

export default themeSlice.reducer