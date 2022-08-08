import { useState } from 'react'
import { useAppSelector, useAppDispatch } from '../../app/hooks'
import { ordered, restocked } from './icecreamSlice'

export const IcecreamView = () => {
  const [value, setValue] = useState(1)
  const numberOfIcecreams = useAppSelector(
    (state) => state.icecream.numberOfIcecreams
  )
  const dispatch = useAppDispatch()
  return (
    <div>
      <h2>Number of Ice Creams - {numberOfIcecreams}</h2>
      <button onClick={() => dispatch(ordered())}>Order Ice Cream</button>
      <input
        type='number'
        value={value}
        onChange={(e) => setValue(parseInt(e.target.value))}
      />
      <button onClick={() => dispatch(restocked(value))}>
        Restock Ice Cream
      </button>
    </div>
  )
}
