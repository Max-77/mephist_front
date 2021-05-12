import * as React from 'react'
import usePortal from 'react-cool-portal'
import {useState} from "react";
import s from './LoginComponent.module.scss'

interface Message{
    text: string,
}

const ModalComponent:React.FC<Message> = ({text})=>{
    const [isFadeOut, setIsFadeOut] = useState(false);

    const {Portal, show, hide} = usePortal({
        containerId: 'portal',
        defaultShow: false,
        clickOutsideToHide: true,
        escToHide: true,
    })

    const close=()=>{
        setIsFadeOut(true);
    }

    const handleClickBackdrop = (e: MouseEvent) => {
        const { id } = e.target as HTMLDivElement;
        if (id === "modal" || id === "modal-dialog") close();
    };

    const handleAnimEnd = () => {
        if (!isFadeOut) return;
        setIsFadeOut(false);
        hide();
    };

    return(<>
        <div>
            {show()}
            <Portal>
                <div
                    id="modal"
                    onClick={(e)=>handleClickBackdrop}
                    className={s.modalMain}
                    onAnimationEnd={handleAnimEnd}
                    tabIndex={-1}
                    role="dialog"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true">

                    <div id="modal-dialog" role="document" className={s.modalDialog}>
                            <div className={s.modal}>
                                <div>{text}</div>
                                <div className={s.smalltext}>Вы можете закрыть окно, нажав "ESC" или кликнув в любую область</div>
                            </div>
                    </div>
                </div>
            </Portal>
        </div>
    </>)
}
export default ModalComponent

