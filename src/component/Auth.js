import React, { useState, useRef } from 'react';

import './Auth.scss';
import Login from './signin/Signin';
import Signup from './signup/Signup';

export default function Auth() {
    const [currentTab, setCurrentTab] = useState('signup');
    const btnDiv = useRef();

    const changeTab = (tabName) => {
        if (tabName === 'login') {
            setCurrentTab('login');
            btnDiv.current.style.left = '50%';
        } else {
            setCurrentTab('signup');
            btnDiv.current.style.left = '0';
        }
    };

    return (
        <>
            <div className="container">
                <div className="button-box">
                    <div ref={btnDiv} id="btn"></div>
                    <button className="toggle-btn" onClick={() => changeTab('login')}>
                        ورود
                    </button>
                    <button className="toggle-btn" onClick={() => changeTab('signup')}>
                        ثبت نام
                    </button>
                </div>
                {currentTab === 'login' && <Login />}
                {currentTab === 'signup' && <Signup />}
            </div>
        </>
    );
}
