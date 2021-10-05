import React, { useState } from 'react'

function GetDatabasesButton() {

    const [dbNamesList, setDbNamesList] = useState("")

    async function getDbNamesList() {
        const response = await fetch("/api/dbs")
        const body = await response.json()
        let bodyString = body["express"].toString()
        setDbNamesList(bodyString)
    }

    return(
        <div>
            <button onClick={getDbNamesList}>Get database list</button>
            <div>{dbNamesList}</div>
        </div>
        
    )
}

export default GetDatabasesButton