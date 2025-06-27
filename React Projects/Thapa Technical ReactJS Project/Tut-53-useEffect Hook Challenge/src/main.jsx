import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "../src/index.css"
import { UseStateMain } from './Hooks/1.useState(Tut46-51)/useStateMain'
import { UseEffectMain } from './Hooks/2.useEffect(Tut52-Tut60)/useEffectMain'

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  
  <>
    {/* <UseStateMain /> */}
      <UseEffectMain />
  </>
  // </StrictMode>
)
