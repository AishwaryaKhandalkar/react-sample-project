import React from 'react'

function EventHandling() {
    const onClickHandler = (name) =>{
        alert("button clicked by" + ' ' + name)
    }
    const multipleStatFunc = () => {
        onClickHandler('Aishwarya');
        console.log('Multiple function on click')
    }
    return (
        <div>
            <button onClick={multipleStatFunc}>Click Me</button>
        </div>
    ) 
}

export default EventHandling
