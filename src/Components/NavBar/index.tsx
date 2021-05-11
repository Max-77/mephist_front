import { Link } from 'react-router-dom';
import * as React from 'react';
import Routes, { RoutesNames } from '../../pages/routes';

interface IProps {
    name: string;
}
import s from './NavBar.module.scss'
import authStore from "../../authStore/auth.store";

const NavBar: React.FC<IProps> = (props: IProps) => {
    return (
        <div className={s.root}>
            <div className={s.grid}>
                <nav className={s.appbar}>
                    <div><Link to={Routes.ROOT} className={s.btn}>
                {RoutesNames.ROOT}
                    </Link></div>
                    <div><Link to={Routes.NEWS} className={s.btn}>
               {RoutesNames.NEWS}
                    </Link></div>
                    <div><Link to={Routes.TEACHERS} className={s.btn}>
               {RoutesNames.TEACHERS}
                    </Link></div>
                    {authStore.getState().logged.value==='false'||authStore.getState().logged===''?<div><Link to={Routes.LOGIN} className={s.btn}>
                        {RoutesNames.LOGIN}
                    </Link></div> : ''}
                </nav>
            </div>
        </div>
    );
};

export default NavBar;