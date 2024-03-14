import React, { useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import {creamOrdered,creamRestocked} from  './cream' 
import {useAppDispatch,useAppSelector} from '../../app/hook'

export const IceCream = () => {
  const [store,setStore]=useState(1)
   const dispatch=useAppDispatch()
    const value=useAppSelector((state)=>state.cream.numOfcream)
  return (
    <div> 
      <h2>Number of Ice Cream-{value}</h2>
      <button onClick={()=>dispatch(creamOrdered())}>Order Ice Cream</button>
      <button onClick={()=>dispatch(creamRestocked(store))}>Restock Ice Cream</button>
      <input onChange={(e)=>setStore(parseInt(e.target.value))}></input>
    </div>
  )
}

 
