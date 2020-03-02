import React from 'react'

function EmployeeCard(props){
    console.log(props.employee)
    return(
        <div className='employee-card'>
            <div>{props.employee.id}</div>
            <div>{props.employee.first_name}</div>
            <div>{props.employee.last_name}</div>
            <div>{props.employee.email}</div>
        </div>
    )
}

export default EmployeeCard