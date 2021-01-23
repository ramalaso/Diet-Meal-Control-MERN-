import React from 'react'
import { useHistory } from 'react-router-dom'

export const BackButton = () => {
    const history = useHistory()
    return (
        <div>
            <button className="back-button" onClick={history.goBack}>Back</button>
        </div>
    )
}
