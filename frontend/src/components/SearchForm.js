import React, { useState } from 'react'

function SearchForm() {

    const [data, setData] = useState("")
    const [serverResp, setServerResp] = useState("")
    
    async function handleSubmit(e) {
        e.preventDefault()
        const response = await fetch('/api/world', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({post: data})
          });
        const body = await response.text();
        setServerResp(body)
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={e => setData(e.target.value)}/>
                <button type="submit">Submit</button>
            </form>
            <div>{serverResp}</div>
        </div>
    )
}

export default SearchForm