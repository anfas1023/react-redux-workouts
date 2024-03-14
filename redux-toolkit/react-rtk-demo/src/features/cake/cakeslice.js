import  {createSlice} from '@reduxjs/toolkit'
// const creamActions=require('../iceCream/cream').creamActions
import { creamOrdered } from '../iceCream/cream'
const initialState = {
  numOfCakes: 20
}

const cakeSlice = createSlice({
  name: 'cake',
  initialState,
  reducers: {
    cakeOrdered: state => { 
      state.numOfCakes--
    },
   cakeRestocked: (state, action) => {
      state.numOfCakes += action.payload
    }
  },
  // extraReducers:{
  //   ['cream/ordered'] : (state)=>{
  //     state.numOfCakes --
  //   }
  // }

  extraReducers :(builder)=>{
    builder.addCase(creamOrdered,(state)=>{
      state.numOfCakes--
    })
  }
})

export default cakeSlice.reducer
export const {cakeOrdered,cakeRestocked}=cakeSlice.actions
