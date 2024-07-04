import './index.css'
import VideoCall from './components/VideoCall'
import { ConnectingComponent } from './components/ConnectingComponent'

function App() {
  return (
    <>
      <div>
        <VideoCall/>
        <ConnectingComponent />
      </div>
    </>
  )
}

export default App
