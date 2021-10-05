import React, { useState } from 'react'

function GetDatabasesButton() {

    const [dbList, setDbList] = useState("")

    return(
        <div>
            <button>Get database list</button>
            <div>{dbList}</div>
        </div>
        
    )
}

export default GetDatabasesButton