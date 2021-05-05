import React from 'react'

export const ConditionalRendering = ({isLoggedIn}) => {
    return(
        <div>
            {isLoggedIn ? <h1>You are Logged In</h1> : <h1>Please Log In</h1> }
        </div>
    )
}


