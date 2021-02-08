import React from 'react'
import './CustomSelect.scss'

const CustomSelect= ({ children }) => {
    return (
        <select className='customSelect'>
            <option value="0">{children}</option>
        </select>
    )
}

export default CustomSelect