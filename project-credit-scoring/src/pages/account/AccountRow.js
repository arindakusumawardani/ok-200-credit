import React from "react";
import {Button} from "reactstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPencilAlt, faTrash} from "@fortawesome/free-solid-svg-icons";


const AccountRow = ({data, number, onUpdate, onDeleted}) => {
    return (
        <tr>
            <td>{number}</td>
            <td>{data.username}</td>
            <td>{data.fullName}</td>
            <td>{data.email}</td>
            <td>
                {data.isVerified ?
                    "Verified" : "Not Verified"
                }
            </td>
            <td>{data.role}</td>
            <td>
                <a onClick={onUpdate} href={`/master/${data.id}`} className="text-muted">
                    <i className="fas fa-pencil-alt" />
                </a>{' '}
                <a onClick={onDeleted} className="text-muted">
                    <i className="fas fa-trash-alt" />
                </a>{' '}

            </td>
        </tr>
    )
}

export default AccountRow;