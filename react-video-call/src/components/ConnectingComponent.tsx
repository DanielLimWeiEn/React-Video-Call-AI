import React, { useEffect, useState } from 'react'
import { io } from 'socket.io-client'

const socket = io("http://localhost:8765");
export const ConnectingComponent = () => {
    const [ content, setContent ] = useState({});
    
    useEffect(() => {
        socket.on('connect', () => {
            console.log("Connected to WebSocket Server")
        });

        socket.on('message', (data) => {
            setContent(data);
        });

        socket.on('disconnect', () => {
            console.log("Disconnected from WebSocket Server")
        })
    }, []);

  return (
    <div style={{display: "flex", justifyContent: "flex-end"}}>
        <h2>Websocket Client</h2>
        <h2>{content.timestamp}</h2>
        <h2>{content.message}</h2>
    </div>
  )
}
