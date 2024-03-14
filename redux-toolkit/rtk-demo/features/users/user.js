const createSlice=require('@reduxjs/toolkit').createSlice
const createAsyncThunk=require('@reduxjs/toolkit').createAsyncThunk

const axios=require('axios')


const initialState={
    loading:false,
    users:[],
    error:''
}

const fetchUser=createAsyncThunk('user/fetchuser',()=>{
  return  axios.get('https://jsonplaceholder.typicode.com/users');
    .then((response)=>response.data.map((user)=>user.id))
    .catch((err)=>console.log(err))
})


const userSlice=createSlice({
    name:'users',
    initialState,
    extraReducers :(builder)=>{
        builder.addCase(fetchUser.pending,(state,action)=>{
            state.loading=true
        })

        builder.addCase(fetchUser.fulfilled,(state,action)=>{
            state.loading=false
            state.users=action.payload
            state.error=''
        })

        builder.addCase(fetchUser.rejected,(state,action)=>{
            state.loading=false
            state.users=[]
            state.error=action.payload
        })
    }
})

module.exports=userSlice.reducer
module.exports.fetchUser=fetchUser