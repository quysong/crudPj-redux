import * as Types from './constants'

export const getEmployee=()=>{
    return {
        type:Types.FETCH_EMPLOYEE
    }
}
export const getEmployeeById=(id)=>{
    return {
        type:Types.FETCH_EMPLOYEE_BY_ID,
        id:id
    }
}
export const insertEmployee=(employee)=>{
    return {
        type:Types.INSERT_EMPLOYEE,
        employee:employee
    }
}
export const editEmployee=(employee)=>{
    return {
        type:Types.UPDATE_EMPLOYEE,
        employee:employee
    }
}