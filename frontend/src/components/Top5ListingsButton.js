import React, { useState } from 'react'

function Top5ListingsButton() {
    
let top5List = "Test"

    async function getTop5() {
        alert("working")
    }

    return(
        <div>
            <button onClick={getTop5}>Get 5 AirBnB listings</button>
            <ul>{top5List}</ul>
        </div>
    )
}

export default Top5ListingsButton