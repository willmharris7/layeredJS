import React, { useState } from 'react'

function SearchForm() {

    const [data, setData] = useState("")
    const [bedroomsList, setBedroomsList] = useState([])

    let bedroomsListItems = bedroomsList.map((listing) => 
        <li>{listing}</li>
    )
    
    async function handleSubmit(e) {
        e.preventDefault()
        const response = await fetch('/api/bedrooms', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({post: data})
          });
        const body = await response.json()
        console.log(body)
        setBedroomsList(body["express"])
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input type="number" onChange={e => setData(e.target.value)}/>
                <button type="submit">Submit</button>
            </form>
            <ul>{bedroomsListItems}</ul>
        </div>
    )
}

export default SearchForm