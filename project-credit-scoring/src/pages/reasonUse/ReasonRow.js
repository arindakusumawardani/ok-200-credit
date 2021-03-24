import React from 'react'

const ReasonRow = ({data, number}) => {
    return (
        <tr>
            <td>{number}</td>
            <td>{data.id}</td>
            <td>{data.type} </td>

        </tr>
    )
}

export default ReasonRow;