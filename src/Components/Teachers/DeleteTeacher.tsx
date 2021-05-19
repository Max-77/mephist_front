import * as React from "react"
import s from './Teacher.module.scss'
import ModalComponent from "../ModalComponent/ModalComponent";
import {CssTextField} from "../LoginComponent/@slice";
import {Button} from "@material-ui/core";
import {role} from "../RootComponents/config";
import {headers} from "./config";

interface IProps{
    id: number
}

const DeleteTeacher : React.FC<IProps> = ({id})=>{

    const checkIfEditor = () =>{
        const curr_role = localStorage.getItem('role');
        return curr_role === role.editor;
    }

    const deleteTeacher = () =>{
        fetch('/api/teachers/rm/'+id.toString(), {
            method: "DELETE",
            headers: headers
        })
            .then((res)=>res.json())
            .then(()=>window.location.reload())
            .catch(()=>window.location.reload())
    }

    return(
        <div>
            {checkIfEditor()?<div>
                <svg xmlns="http://www.w3.org/2000/svg"
                     width="20" height="20"
                     onClick={deleteTeacher}
                     fill="currentColor"
                     className="bi bi-person-dash"
                     viewBox="0 0 16 16">
                    <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H1s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C9.516 10.68 8.289 10 6 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
                    <path fill-rule="evenodd" d="M11 7.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5z"/>
                </svg>
            </div>:""}
        </div>
    )
}

export default DeleteTeacher