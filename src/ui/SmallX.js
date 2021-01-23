import React from 'react'

export const SmallX = ({onClick}) => {
    return (
        <div className="small-x">
            <span className="the-x" onClick={onClick}>X</span>
        </div>
    )
}
