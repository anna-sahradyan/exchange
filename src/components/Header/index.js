import React from 'react';
import s from './Header.module.scss';
import {useSelector} from "react-redux";
import {selectRate} from "../../store/rateSlice";

const Header = () => {
    const rate = useSelector(selectRate);
    // const rateItem = {...rate.conversion_rates}
    const eur = rate['EUR'];
    const usd = rate['USD'];
    console.log(rate['EUR']);

    console.log()

    let date = new Date().toLocaleDateString();
    return (
        <>
            <header className={s.header}>
                <ul>
                    <li>DATE:{date}</li>
                    <li>EUR:{eur}</li>
                    <li>USD:{usd}</li>
                </ul>
                <div className={s.logo}><img
                    src={`https://cdn4.iconfinder.com/data/icons/banking-and-finance/500/dollar-exchange-128.png`}
                    alt=""/></div>
            </header>
        </>
    );
};

export default Header;