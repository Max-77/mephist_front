import * as React from 'react'
import NavBar from "../../Components/NavBar";
import LoginComponent from "../../Components/LoginComponent";

export const Login: React.FC = () =>(
    <div>
        <NavBar name={'Новости'}/>
        <LoginComponent/>
    </div>
)