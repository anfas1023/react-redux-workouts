import  {createSlice,PayloadAction} from '@reduxjs/toolkit'

type initialType={
  numOfcream:number
}
const initialState:initialType = {
  numOfcream: 30
}

const creamSlice = createSlice({
  name: 'cream',
  initialState,
  reducers: {
    creamOrdered: state => {
      state.numOfcream--
    },
    creamRestocked: (state, action:PayloadAction<number>) => {
      state.numOfcream += action.payload
    }
  }

})

export default creamSlice.reducer
export const {creamOrdered,creamRestocked} = creamSlice.actions
