import React from 'react'
import { useAppSelector, useAppDispatch } from '../../app/hooks'
import { ordered, restocked } from './cakeSlice'

export const CakeView = () => {
  const dispatch = useAppDispatch()
  const numberOfCakes = useAppSelector((state) => state.cake.numberOfCakes)
  return (
    <div>
      <h2>Number of cakes - {numberOfCakes}</h2>
      <button onClick={() => dispatch(ordered())}>Order Cake</button>
      <button onClick={()=>dispatch(restocked(1))}>Restock cakes</button>
    </div>
  )
}
