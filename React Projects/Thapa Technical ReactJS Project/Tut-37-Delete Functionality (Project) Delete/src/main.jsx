import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {Project3} from "./Projects/ToDo/3. Delete and ClearAll"
import "../src/index.css"

createRoot(document.getElementById('root')).render(
  <StrictMode>
      {/* <Todo /> */}
      {/* <TodoTimer /> */}
      {/* <Practice /> */}
      <Project3 />
  </StrictMode>,
)
