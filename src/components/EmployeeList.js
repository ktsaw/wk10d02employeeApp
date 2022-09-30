import EmployeeListItem from "./EmployeeListItem";

//import employeeArr from '../data';


const EmployeeList = (props) => {
    return (
        <>
        <div className="employeeList">
            <EmployeeListItem />
            <EmployeeListItem />
            <EmployeeListItem />
            <EmployeeListItem />
            <EmployeeListItem />
            <EmployeeListItem />
        </div>
        </>
    )
}

export default EmployeeList;