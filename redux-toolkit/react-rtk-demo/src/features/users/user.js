import  {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'
 



const initialState={
    loading:false,
    users:[],
    error:''
}

export const fetchUser=createAsyncThunk('user/fetchuser',()=>{
  return  axios.get('https://jsonplaceholder.typicode.com/users')
    .then((response)=>response.data.map((user)=>user))
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

export default userSlice.reducer
