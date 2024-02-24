import Player from './Player'

const videoUrl = 'https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4'

const App = () => {
  return (
    <main className="w-full h-full flex items-center justify-center">
      <Player videoUrl={videoUrl} />
    </main>
  )
}

export default App
