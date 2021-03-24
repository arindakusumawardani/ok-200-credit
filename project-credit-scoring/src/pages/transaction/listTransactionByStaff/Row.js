import React from 'react'
import {Button} from "reactstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faQuestionCircle} from "@fortawesome/free-solid-svg-icons";

const Row = ({data, number}) => {

    console.log(data)
    return (

        <tr>
            <td>{number}</td>
            <td>{data.transaction.customer.name}</td>
            <td>{data.transaction.customer.employeeType} </td>
            <td>{data.transaction.loan}</td>
            <td>{data.transaction.tenor}</td>
            <td>{data.transaction.interestRate}</td>
            <td>
                <Button href={`/transaction/${data.id}`} style={{background:"#e42256"}}>
                    <FontAwesomeIcon icon={faQuestionCircle}/>
                </Button>
            </td>
        </tr>
    )
}

export default Row;

