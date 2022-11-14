
function Employee(props) {
    const emp = props.employee 
    const {fnm, lnm, salary, city, designatin } = props.employee
    return (
        <>
            <h1>Employee Information</h1>
           
            <p>First Name : {props.employee.fnm}</p>
            <p>Last Name : {emp.lnm}</p>
            <p>Salary : ${salary}</p>
            <div>{JSON.stringify(props)}</div>
        </>
    )
}

export default Employee