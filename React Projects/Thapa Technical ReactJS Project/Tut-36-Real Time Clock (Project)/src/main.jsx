import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {Todo} from "./Projects/ToDo/1.Todo"
import {TodoTimer} from "./Projects/ToDo/2.ToDo_Timer"
import { Practice } from './Projects/ToDo/Practice'
import "../src/index.css"

createRoot(document.getElementById('root')).render(
  <StrictMode>
      {/* <Todo /> */}
      <TodoTimer />
      {/* <Practice /> */}
  </StrictMode>,
)
