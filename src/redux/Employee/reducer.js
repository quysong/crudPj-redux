import * as Types from './constants'
import { employees } from './mockData'

var dataFetch=null;
var localStorageData=localStorage.getItem('myData');
    if(localStorageData==null){
      localStorage.setItem('myData', JSON.stringify(employees));
      dataFetch=employees;
    }else{
      dataFetch = JSON.parse(localStorageData);
    }

var iniState={
    employeeArr:dataFetch,
    employeeEditing:{
      Id:0,
      Name:'',
      Email:'',
      Address:'',
      Phone:''
    }
}

var employee= (state=iniState,action)=>{
    switch(action.type){
        case Types.FETCH_EMPLOYEE:
            return {...state};

        case Types.FETCH_EMPLOYEE_BY_ID:
            return {...state};

        case Types.INSERT_EMPLOYEE:
            let newId=0;
            var length=state.employeeArr.length;
            if(length>0){
              newId= state.employeeArr[length-1].Id+1;
            }
            action.employee.Id=newId;
            state.employeeArr.push(action.employee);
            localStorage.setItem("myData",JSON.stringify(state.employeeArr));

            return {...state};

        case Types.UPDATE_EMPLOYEE:
            var newState={...state};
            var foundIndex = newState.employeeArr.findIndex(x => x.Id === action.employee.Id);
            newState.employeeArr[foundIndex] = action.employee;
            localStorage.setItem("myData",JSON.stringify(newState.employeeArr));

            return {...newState};

        case Types.DELETE_EMPLOYEE_BY_ID:
            var newState={...state};
            var foundIndex = newState.employeeArr.findIndex(x => x.Id === action.employee.Id);
            newState.employeesArr.splice(foundIndex,1);
            localStorage.setItem('myData', JSON.stringify(newState.employeesArr));

            return {...state};
        default:
            return {...state};
    }
}

export default employee;