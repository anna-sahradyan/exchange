import React, {useEffect, useState} from 'react';
import CalcList from "../../container/CalcList";
import {useSelector} from "react-redux";
import Loading from "../Loading";
import s from '../../container/Calc.module.scss';
const Main = () => {
    const [isLoading, setIsLoading] = useState(false)
    const {status, error} = useSelector(state => state.rate);
    useEffect(() => {
        if (status) {
            setIsLoading(true)
        }

        if (!status) {
            setTimeout(() => {
                setIsLoading(false)
            }, 500)
        }
    }, [status])
    return (
        <>
            <div className={s.error}>
            {isLoading  &&
               <Loading/>
            }
            {error && <h2>An Error occurred:{error}</h2>}
            </div>
            <CalcList/>

        </>
    );
};

export default Main;