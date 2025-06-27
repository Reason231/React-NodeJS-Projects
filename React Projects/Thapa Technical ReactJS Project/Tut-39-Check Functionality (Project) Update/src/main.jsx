import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "../src/index.css"
import {Project4} from "./Projects/ToDo/Seperation of Concern"

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <Project4 />
  </StrictMode>,
)
