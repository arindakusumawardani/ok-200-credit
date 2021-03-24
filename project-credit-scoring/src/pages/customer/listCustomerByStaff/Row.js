import React from 'react'

const Row = ({data, onUpdate, number}) => {
    return (
        <tr>
            <td>{number}</td>
            <td>{data.name}</td>
            <td>{data.idNumber} </td>
            <td>{data.employeeType}</td>
            <td>{data.submitter}</td>
            <td>
                <a onClick={data} href={`/customer/${data.id}/detail`} className="text-muted">
                    <i className="fas fa-info-circle" />
                </a>{' '}
                <a onClick={onUpdate} href={`/customer/${data.id}/edit`} className="text-muted">
                    <i className="fas fa-pencil-alt" />
                </a>{' '}
                {localStorage.getItem("roles") == "MASTER" || "STAFF" &&
                <>
                <a onClick={data} href={`/transaction/form/${data.id}`} className="text-muted">
                    <i className="fas fa-wallet" />
                </a>
                    </>}
            </td>
        </tr>
    )
}

export default Row;
