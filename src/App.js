import React from 'react';
import Header from "./components/Header";
import Main from "./components/home";

const App = () => {

    return (
        <>
            <div className='wrapper'>
                <Header/>
                <div className='main'>
                    <Main/>
                </div>
            </div>
        </>
    );
};

export default App;