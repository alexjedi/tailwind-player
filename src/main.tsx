import React from 'react'
import ReactDOM from 'react-dom/client'
// import { Player } from './index'
import { Player } from 'tailwind-player'

const audioUrl = 'https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Player src={audioUrl} />
  </React.StrictMode>
)
