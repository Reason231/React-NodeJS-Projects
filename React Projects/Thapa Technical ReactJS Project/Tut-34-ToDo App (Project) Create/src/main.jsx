import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {Todo} from "./Projects/ToDo/Todo"

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <Todo />
  </StrictMode>,
)
