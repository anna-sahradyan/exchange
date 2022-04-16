import React, {useState} from 'react';
import s from "./Calc.module.scss";
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';
import {useDispatch, useSelector} from "react-redux";
import {fetchRate, selectRate} from "../store/rateSlice";
import {FormControl, InputLabel, MenuItem, Select, TextField} from "@mui/material";
import {useEffect} from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const CalcList = () => {


    const [result, setResult] = useState(0);
    const rate = useSelector(selectRate);
    const [usd, setUsd] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        let elements = e.target.elements;
        let countCurrency = elements['count-currency'].value;
        let typeCurrency = elements['type-currency'].value;
        setResult(countCurrency / rate[typeCurrency])
        if (!countCurrency || !typeCurrency) {
            setResult(0)
            toast("Enter the amount and select the currency!");
        }

    }
    const handleChange = (event) => {
        setUsd(event.target.value);
    };
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchRate())
    }, [dispatch])
    return (
        <>
            <div className={s.content}>
                <div className={s.partCalc}>
                    <ToastContainer />
                    <form onSubmit={handleSubmit}>
                        <div className={s.inputPart}>
                                    <TextField
                                        name={'count-currency'}
                                               id="filled-number"
                                               label="Number"
                                               type="number"
                                               InputLabelProps={{
                                                   shrink: true,
                                               }}
                                               variant="filled"
                                    />


                    </div>
                        <div className={s.partSelect}>
                        <FormControl sx={{m: 1, minWidth: 80}}>
                            <InputLabel id="demo-simple-select-autowidth-label">USD</InputLabel>
                            <Select
                                className={s.sel}
                                labelId="demo-simple-select-autowidth-label"
                                id="demo-simple-select-autowidth"
                                autoWidth
                                label="USD"
                                value={usd}
                                onChange={handleChange}
                                name="type-currency"
                            >
                                {Object.keys(rate).map((option) => <MenuItem value={option} key={option}>{option}</MenuItem>)}
                            </Select>

                        </FormControl>
                        </div>
                        <div className={s.subBtn}>
                            <Button variant="contained" type={`submit`}value={`calc`}endIcon={<SendIcon />}>
                                Exchange
                            </Button>
                        </div>

                    </form>
                    </div>
                    <p className={s.result}>UAH: <span>{result.toFixed(2)}</span>  </p>

            </div>

        </>
    );
};

export default CalcList;