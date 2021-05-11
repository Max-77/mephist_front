import * as React from 'react';
import NavBar from "../../Components/NavBar/index";
import RootComp from "../../Components/RootComponents/index"
import FormComponent from "../../Components/LoginComponent/FormComponent";
import authStore from "../../authStore/auth.store";
import LogoutComponent from "../../Components/LoginComponent/Logout";

export const Root: React.FC = () => (
    <div>
        <NavBar name={'Главная страница'}/>
        <div>
            <RootComp/>
            {authStore.getState().logged.value==='false'||authStore.getState().logged===''?<FormComponent type='register'/>:<><LogoutComponent/></>}
        </div>
    </div>
)