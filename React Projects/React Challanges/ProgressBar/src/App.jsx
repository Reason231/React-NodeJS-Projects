import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App(){
  const [data,setData]=useState(0)

  return(
    <>
      <div>
        <input type="range" value={data} onChange={(e)=>setData(e.target.value)} className=""/>
        <p>{data}%</p>
      </div>
    </>
  )
}

export default App
