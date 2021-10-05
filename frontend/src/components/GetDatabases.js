import React, { useState } from 'react'

function GetDatabases() {

    const [dbNamesList, setDbNamesList] = useState([])
     
    let dbNamesListItems = dbNamesList.map((name) =>
        <li>{name}</li>
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

export default GetDatabases