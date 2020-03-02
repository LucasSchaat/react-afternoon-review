import React from 'react'
import EmployeeCard from './EmployeeCard'
import data from '../data.json'

class EmployeeCards extends React.Component{
    constructor(){
        super()
        this.state = {
            data: data
        }
    }

    render(){
        return(
            <div className='employee-cards-box'>
                {this.state.data.map(employee => {
                    return <EmployeeCard employee={employee}/>
                })}
            </div>
        )
    }
}

export default EmployeeCards