import React, { useState } from 'react'

function GetTop5() {
    const [top5List, setTop5List] = useState([])

    let top5ListItems = top5List.map((listing) =>
        <li>{listing}</li>
    )

    async function getTop5s() {
        const response = await fetch("/api/top5")
        const body = await response.json()
        setTop5List(body["express"])
    }

    return(
        <div>
            <button onClick={getTop5s}>Get 5 AirBnB listings</button>
            <ul>{top5ListItems}</ul>
        </div>
    )
}

export default GetTop5