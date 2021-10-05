import React, { useState } from 'react'

function Top5ListingsButton() {
    const [top5List, setTop5List] = useState([])

    let top5ListItems = top5List.map((listing) =>
        <li>{listing}</li>
    )

    async function getTop5() {
        const response = await fetch("/api/top5")
        const body = await response.json()
        setTop5List(body["express"])
    }

    return(
        <div>
            <button onClick={getTop5}>Get 5 AirBnB listings</button>
            <ul>{top5ListItems}</ul>
        </div>
    )
}

export default Top5ListingsButton