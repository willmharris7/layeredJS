import React, { useState } from 'react'

function GetDatabasesButton() {

    const [dbNamesList, setDbNamesList] = useState("")

    async function getDbNamesList() {
        alert("working")
    }

    return(
        <div>
            <button onClick={getDbNamesList}>Get database list</button>
            <div>{dbNamesList}</div>
        </div>
        
    )
}

export default GetDatabasesButton