import './index.css'
import VideoCall from './components/VideoCall'
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [token2, setToken2] = useState("");

  useEffect(() => {
    axios.get("http://localhost:8080/stream-io-token/1", {
      params: {
        userId: "jonny"
      }
    }).then((res) => {
      setToken2(res.data.streamIOToken);
    }).catch((error) => {
      console.log(error);
    })

    console.log(token2);
  });

  return (
    <>
      <div>
        <VideoCall token2={token2}/>
      </div>
    </>
  )
}

export default App
