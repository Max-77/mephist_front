import * as React from 'react';
import NavBar from "../../Components/NavBar/index";
import TeachersComponent from "../../Components/Teachers";

export const Teachers: React.FC = () => (
    <div>
        <NavBar name={'Преподаватели'}/>
        <TeachersComponent/>
    </div>
)