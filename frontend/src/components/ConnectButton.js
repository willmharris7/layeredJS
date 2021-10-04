import React, { useState } from 'react'

function ConnectButton() {
    
    const [message, setMessage] = useState("Push to connect")
    const [data, setData] = useState("")
    
    async function hitServer() {
        const response = await fetch("/api/hello")
        const body = await response.json()
        console.log(body)
    }

    async function handleSubmit(e) {
        e.preventDefault()
        console.log("Definition of data is: " + data)
        const response = await fetch('/api/world', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({post: data})
          });
          const body = await response.text();
          console.log(body)
    }

    return(
        <div>
        <button onClick={hitServer}>Connect with express</button>
        <form onSubmit={handleSubmit}>
            <input type="text" onChange={e => setData(e.target.value)}/>
            <button type="submit">{message}</button>
        </form>
        </div>
    )
}

export default ConnectButton