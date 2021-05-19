import * as React from "react"
import {useState} from "react";
import {Table, TableBody, TableCell, TableHead, TableRow} from "@material-ui/core";
import s from './AdminComponent.module.scss'
import {headers} from "../Teachers/config";
import ModalComponent from "../ModalComponent/ModalComponent";

const TableComponent:React.FC = ()=>{

    const [users, setUsers] = useState([])
    const [error, setError] = useState('')

    const getUsers = () =>{
        fetch('/api/users')
            .then((res)=>res.json())
            .then((result)=>{
                if (result.statusCode){
                    setError(result.message);
                    return;
                }
                let usersArr = [];
                for (let i=0; i<result.length; i++){
                    usersArr.push(result[i]);
                }
                setUsers(usersArr)
            })
    }

    const dropUser = (id) => {
        setError('');
        fetch('/api/users/rm/'+id.toString(), {
            method: 'DELETE',
            headers: headers
        })
            .then((res)=>res.json())
            .then((result)=>{
                if (result.message==='Unauthorized')
                    setError('Вы не администратор');
            })
            .catch(()=>window.location.reload())
    }

    return(
        <div>
            {getUsers()}
            {error===''?'':<ModalComponent text={error}/>}
            <div className={s.table}>
                <Table size={'small'} aria-label="a dense table">
                    <TableHead>
                        <TableRow>
                            <TableCell align={"center"}>User ID</TableCell>
                            <TableCell align={"center"}>Username</TableCell>
                            <TableCell align={"center"}>User role</TableCell>
                            <TableCell align={"center"}>Drop user</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {users.map((value,index)=>(
                            <TableRow>
                                <TableCell align={"center"}>{value.id}</TableCell>
                                <TableCell align={"center"}>{value.username}</TableCell>
                                <TableCell align={"center"}>{value.role}</TableCell>
                                <TableCell align={'center'}>
                                    <svg xmlns="http://www.w3.org/2000/svg"
                                         style={{cursor:'pointer'}}
                                         onClick={()=>dropUser(value.id)}
                                         width="16" height="16"
                                         fill="currentColor"
                                         className="bi bi-trash"
                                         viewBox="0 0 16 16">
                                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                                        <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                                    </svg></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </div>
    )
}

export default TableComponent