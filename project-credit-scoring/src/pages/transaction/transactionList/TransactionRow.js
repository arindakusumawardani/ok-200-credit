import React from 'react'
import {Button} from "reactstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheckCircle, faInfoCircle, faPencilAlt, faQuestionCircle, faTrash} from "@fortawesome/free-solid-svg-icons";

const TransactionRow = ({data, onUpdate, number}) => {

    console.log(data)

    return (

        <tr>
            <td>{number}</td>
            <td>{data.transaction.customer.name}</td>
            <td>{data.transaction.customer.employeeType} </td>
            <td>{data.transaction.loan}</td>
            <td>{data.transaction.tenor}</td>
            <td>{data.transaction.interestRate}</td>
            {/*{data.approve == true &&*/}
            <td>
                {/*<a href={`/transaction/${data.id}/detail`} className="text-muted">*/}
                {/*    <i className="fas fa-info-circle" />*/}
                {/*</a>{' '}*/}
                <Button href={`/transaction/${data.id}`} style={{background:"#e42256"}}>
                    <FontAwesomeIcon icon={faQuestionCircle}/>
                </Button>
            </td>
        </tr>
    )
}

export default TransactionRow;

