const createSlice = require('@reduxjs/toolkit').createSlice
const creamActions=require('../iceCream/cream').creamActions
const initialState = {
  numOfCakes: 20
}

const cakeSlice = createSlice({
  name: 'cake',
  initialState,
  reducers: {
    ordered: state => {
      state.numOfCakes--
    },
    restocked: (state, action) => {
      state.numOfCakes += action.payload
    }
  },
  // extraReducers:{
  //   ['cream/ordered'] : (state)=>{
  //     state.numOfCakes --
  //   }
  // }

  extraReducers :(builder)=>{
    builder.addCase(creamActions.ordered,(state)=>{
      state.numOfCakes--
    })
  }
})

module.exports = cakeSlice.reducer
module.exports.cakeActions = cakeSlice.actions
