import * as React from "react"
import {role} from "../RootComponents/config";
import TableComponent from "./TableComponent";
import FormAdminComponent from "./FormAdminComponent";

const AdminComponent:React.FC = ()=>{

    const checkIfAdmin = () =>{
        const curr_role = localStorage.getItem('role');
        return curr_role === role.admin;
    }

    return(
        <div>
            {checkIfAdmin()?<>
                <TableComponent/>
                <FormAdminComponent/>
            </>:''}
        </div>
    )
}

export default AdminComponent