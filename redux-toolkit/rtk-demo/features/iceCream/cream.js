const createSlice = require('@reduxjs/toolkit').createSlice

const initialState = {
  numOfcream: 30
}

const creamSlice = createSlice({
  name: 'cream',
  initialState,
  reducers: {
    ordered: state => {
      state.numOfcream--
    },
    restocked: (state, action) => {
      state.numOfcream += action.payload
    }
  }

})

module.exports = creamSlice.reducer
module.exports.creamActions = creamSlice.actions
