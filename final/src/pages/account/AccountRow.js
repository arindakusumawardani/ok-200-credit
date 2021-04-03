import React from "react";
import {Col} from "reactstrap";
import {Row} from "reactstrap";


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
                        <a onClick={onUpdate} href={`/master/${data.id}`} className="text-muted btn-lg">
                            <i className="fas fa-pencil-alt" />
                        </a>
                        <a onClick={onDeleted} className="text-muted btn-lg">
                            <i className="fas fa-trash-alt" />
                        </a>
            </td>
        </tr>
    )
}

export default AccountRow;