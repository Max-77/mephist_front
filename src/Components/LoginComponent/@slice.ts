import {makeStyles, withStyles} from "@material-ui/core/styles";
import {TextField} from "@material-ui/core";

export const CssTextField = withStyles({
    root: {
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: 'lightblue',
                color: 'blue'
            },
            '&:hover fieldset': {
                borderColor: 'blue',
            },
            '&.Mui-focused fieldset': {
                borderColor: 'blue',
            },
        },
    },
})(TextField);

export const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    margin: {
        margin: theme.spacing(1),
    },
}));

export interface IProps{
    type: string
}

export enum Index{
    username,
    password
}

export const errorArr = [
    'Поля не могут быть пустыми',
    'Пользователь с таким именем уже существует',
    'Неверное имя пользователя или пароль',
    'Пользователя с таким именем не существует',
    'Непредвиденная ошибка',
]
