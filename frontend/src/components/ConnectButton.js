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
        alert(data)
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