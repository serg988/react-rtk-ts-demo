import { useState } from 'react'
import { CakeView } from './features/cake/CakeView'
import { IcecreamView } from './features/icecream/IcecreamView'
import { UserView } from './features/user/UserView'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>

        <CakeView />
        <IcecreamView />
        <UserView />

    </div>
  )
}

export default App
