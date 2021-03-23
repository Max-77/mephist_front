import * as React from 'react';
import NavBar from "../../Components/NavBar/index";
import RootComp from "../../Components/RootComponents/index"

export const Root: React.FC = () => (
    <div>
        <NavBar name={'Главная страница'}/>
        <div>
            <RootComp/>
        </div>
    </div>
)