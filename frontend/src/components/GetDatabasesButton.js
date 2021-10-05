import React, { useState } from 'react'

function GetDatabasesButton() {

    const [dbNamesList, setDbNamesList] = useState([])
    const numbers = [1, 2, 3, 4, 5];
    let dbNamesListItems = numbers.map((number) =>
        <li>{number}</li>
    )


    async function getDbNamesList() {
        const response = await fetch("/api/dbs")
        const body = await response.json()
        setDbNamesList(body["express"])
    }

    return(
        <div>
            <button onClick={getDbNamesList}>Get database list</button>
            <ul>{dbNamesListItems}</ul>
        </div>
        
    )
}

export default GetDatabasesButton