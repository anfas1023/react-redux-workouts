import  {createSlice,createAsyncThunk,PayloadAction} from '@reduxjs/toolkit'
import axios from 'axios'
 type userstype={
    id:number,
    name:string
 }
type initialType ={
    loading:boolean,
    users:userstype[],
    error:any
}


const initialState :initialType={
    loading:false,
    users:[],
    error:''
}

export const fetchUser=createAsyncThunk('user/fetchuser',()=>{
  return  axios.get('https://jsonplaceholder.typicode.com/users')
    .then((response)=>response.data.map((user:userstype[])=>user))
    .catch((err)=>console.log(err))
})


 const userSlice=createSlice({
    name:'users',
    initialState,
    reducers:{},
    extraReducers :(builder)=>{
        builder.addCase(fetchUser.pending,(state)=>{
            state.loading=true
        })

        builder.addCase(fetchUser.fulfilled,(state,action:PayloadAction<userstype[]>)=>{
            state.loading=false
            state.users=action.payload
            state.error=''
        })

        builder.addCase(fetchUser.rejected,(state,action)=>{
            state.loading=false
            state.users=[]
            state.error='Some thing went Wrong'
        })
    }
})

export default userSlice.reducer
