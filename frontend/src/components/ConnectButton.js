import React, { useState } from 'react'

function ConnectButton() {
    
    const [message, setMessage] = useState("Push to connect")
    
    return(
        <form action="../../post" method="post" className="form">
            <button type="submit">{message}</button>
        </form>
    )
}

export default ConnectButton