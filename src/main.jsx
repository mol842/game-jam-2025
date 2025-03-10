import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { MantineProvider } from '@mantine/core'
import '@mantine/core/styles.css';
import VisualNovel from './novel.jsx'
import MazeGame from './mazeGame.jsx'

createRoot(document.getElementById('root')).render(
  <MantineProvider>
    <StrictMode>
      <VisualNovel />
    </StrictMode>
  </MantineProvider>
)
