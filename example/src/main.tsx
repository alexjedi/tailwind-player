import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Player from '../../src/index'

const videoUrl = 'https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <main className="w-[100vw] h-[100vh] flex items-center justify-center">
      <Player audioUrl={videoUrl} />
    </main>
  </React.StrictMode>
)
