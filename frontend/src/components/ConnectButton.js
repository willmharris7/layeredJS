import React, { useState } from 'react'

function ConnectButton() {
    
    const [message, setMessage] = useState("Push to connect")
    
    async function hitServer() {
        const response = await fetch("/api/hello")
        const body = await response.json()
        console.log(body)
    }

    return(
        <div>
        <button onClick={hitServer}>Connect with express</button>
        <form action="../../post" method="post" className="form">
            <button type="submit">{message}</button>
        </form>
        </div>
    )
}

export default ConnectButton