import React from 'react'
// import { useSelector,useDispatch } from 'react-redux'
import {cakeOrdered,cakeRestocked} from './cakeslice'
import {useAppDispatch,useAppSelector} from '../../app/hook'

export const CakeView = () => {
    const Value=useAppSelector((state)=>state.cake.numOfCakes)
    const dispatch=useAppDispatch();
  return (
    <div>
      <h2>Number of Cake- {Value}</h2>
      <button onClick={()=>dispatch(cakeOrdered())}>Order Cake</button>
      <button onClick={()=>dispatch(cakeRestocked(3))}>Restock Cake</button>
    </div>
  )
}

 
