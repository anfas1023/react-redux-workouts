import  {createSlice} from '@reduxjs/toolkit'

const initialState = {
  numOfcream: 30
}

const creamSlice = createSlice({
  name: 'cream',
  initialState,
  reducers: {
    creamOrdered: state => {
      state.numOfcream--
    },
    creamRestocked: (state, action) => {
      state.numOfcream += action.payload
    }
  }

})

export default creamSlice.reducer
export const {creamOrdered,creamRestocked} = creamSlice.actions
