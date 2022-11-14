import College from "./College"
import Employee from "./Employee"

let myStyle = {color:'red'}
let name = "Pritesh Patel"

let emp = {
    fnm: "Pritesh",
    lnm: "Patel",
    salary: 1200.00,
    city: "Toronto",
    designation: "Prof."
}

function Hello() {
    return (
        <>
            <h2 style={ myStyle }>{name} - {2 + 3}</h2>
            <College city="Toronto" />
            <Employee employee = {emp}/>
        </>
    )
}

export default Hello