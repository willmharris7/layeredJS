import React, { useState } from 'react'

function Top5ListingsButton() {
    
    async function getTop5() {
        
    }

    return(
        <div>
            <button onClick={getTop5}>Get 5 AirBnB listings</button>
        </div>
    )
}

export default Top5ListingsButton