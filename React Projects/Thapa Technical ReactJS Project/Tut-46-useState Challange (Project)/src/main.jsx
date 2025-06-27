import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "../src/index.css"
import {Project4} from "./Projects/ToDo/Seperation of Concern"
import ShortCircuitExample from "./Tut43.ShortCircuit"
import { Tut46 } from './Hooks/useState(Tut46-51)/Tut46_useStateChallange'

createRoot(document.getElementById('root')).render(
  <StrictMode>
     {/* <Project4 /> */}
     {/* <ShortCircuitExample /> */}
     <Tut46 />
  </StrictMode>,
)
