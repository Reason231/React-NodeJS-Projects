import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import NetflixSeries from './components/NetflixSeries'
import {Hooks} from "./components/Hooks/0.HooksMain"
import {Tut29Challange} from "./Challanges/Tut29"
import {ToggleSwitch} from "./Challanges/Tut31/ToggleSwtich"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <NetflixSeries/> */}
    {/* <Hooks /> */}
    {/* <Tut29Challange /> */}
    <ToggleSwitch />
    
  </StrictMode>,
)
