import React from 'react'

const ReportRow = ({data, onUpdate, number}) => {
        console.log("row", data)
    return (

        <tr>
            <td>{number}</td>
            <td>
                    {data.approval.approve ?
                        "TRUE" : "FALSE"
                    }
            </td>
            <td>{data.approval.transaction.customer.name}</td>
            <td>{data.approval.transaction.customer.email}</td>
            <td>{data.approval.transaction.customer.idNumber}</td>
            <td>{data.approval.transaction.customer.address}</td>
            <td>{data.approval.transaction.customer.employeeType}</td>
            <td>{data.approval.transaction.income}</td>
            <td>{data.approval.transaction.outcome}</td>
            <td>{data.approval.transaction.loan}</td>
            <td>{data.approval.transaction.interestRate}</td>
            <td>{data.approval.transaction.tenor}</td>
            <td>{data.approval.transaction.mainLoan}</td>
            <td>{data.approval.transaction.interest}</td>
            <td>{data.approval.transaction.installmentTotal}</td>
            <td>{data.approval.transaction.installment}</td>
            <td>{data.approval.transaction.creditRatio}</td>
            <td>
                    {data.approval.transaction.financeCriteria ?
                        "TRUE" : "FALSE"}
            </td>
            <td>
                    {data.approval.transaction.employeeCriteria ?
                        "TRUE" : "FALSE"}
            </td>
            <td>{data.submitDate}</td>
            <td>{data.approvalDate}</td>
        </tr>
    )
}

export default ReportRow;