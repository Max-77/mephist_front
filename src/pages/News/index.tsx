import * as React from 'react';
import NavBar from "../../Components/NavBar/index";
import NewsComponent from "../../Components/News";

export const News: React.FC = () => (
    <div>
        <NavBar name={'Новости'}/>
        <NewsComponent/>
    </div>
)