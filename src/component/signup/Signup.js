import React, { useEffect, useState, useMemo } from 'react';
import PasswordBox from '../passwordBox/PasswordBox';
import SelectInput from '../selectedInput/SelectInput';
import './signup.scss';

export default function Signup() {
    const [inputs, setInputs] = useState({});
    const [states, setStates] = useState([]);
    const [{ state, city }, setSateCity] = useState({
        state: 'آذربایجان شرقی',
        city: '',
    });

    const [errors, setErrors] = useState({
      firstname: 'firstname is requierd!',
      lastname: 'lastname is requierd!',
      email: 'email is requierd!',
      password: 'password is requierd!',
      city: 'city is requierd!',
    });

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs((values) => ({ ...values, [name]: value }));
        if (value === '') {
            setErrors({ ...errors, [name]: `${name} is requierd!` });
        } else {
            setErrors({ ...errors, [name]: '' });
        }
    };

    useEffect(() => {
        fetch('./iranstates.json')
            .then((res) => res.json())
            .then((response) => {
                setStates(response);
            });
    }, []);

    const stateOptions = Object.keys(states).map((state) => (
        <option key={state} value={state}>
            {state}
        </option>
    ));

    const cityOptions = useMemo(() => {
        for (const [key, value] of Object.entries(states)) {
            if (key === state) {
                console.log(key);
                return value.map((item) => (
                    <option key={item} value={item}>
                        {item}
                    </option>
                ));
            }
        }
    }, [state]);

    function handleStateChange(event) {
        setSateCity((data) => ({ city: '', state: event.target.value }));
    }

    function handleCityChange(event) {
        setSateCity((data) => ({ ...data, city: event.target.value }));
        handleChange(event);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if(Object.keys(inputs).length === 0) {
          alert('Please enter required fields!');
          return;
        }
        for (const value of Object.values(errors)) {
          console.log(value);
          if(value !== '') {
            const errorMessage = value;
            alert(errorMessage);
            return;
          }
        }
        console.log(inputs);
        alert('ثبت نام با موفقیت انجام گرفت.')
    };

    return (
        <>
            <h2>رايگان ثبت نام كنيد</h2>
            <form className="form-signup" onSubmit={handleSubmit}>
                <div className="row">
                    <input type="text" name="firstname" placeholder="نام " value={inputs.firstname || ''} onChange={handleChange} />
                    <input type="text" name="lastname" placeholder="نام خانوادگي " value={inputs.lastname || ''} onChange={handleChange} />
                </div>

                <input type="text" name="email" placeholder="پست الكترونيك " value={inputs.email || ''} onChange={handleChange} />
                <PasswordBox className="pass-box" passwordName="password" passwordValue={inputs.password || ''} changeHandler={handleChange} />
                <div className="form-state row">
                    <select value={state} onChange={handleStateChange}>
                        {stateOptions}
                    </select>
                    <select className="form-state__state" name="city" value={inputs.city || ''} onChange={handleCityChange}>
                        {cityOptions}
                    </select>
                </div>
                <div className="row">
                    <select name="education" value={inputs.education || ''} onChange={handleChange}>
                        <option value="">تحصیلات</option>
                        <option value="کارشناسی ارشد">کارشناسی ارشد</option>
                        <option value="کارشناسی">کارشناسی</option>
                        <option value="فوق دیپلم">فوق دیپلم</option>
                        <option value="دیپلم">دیپلم</option>
                    </select>
                    {inputs.education ? <input type="text" name="educationPlace" placeholder="محل تحصیل" value={inputs.educationPlace || ''} onChange={handleChange} /> : <span></span>}
                </div>
                <input className="form-btn" type="submit" value="ثبت نام" />
            </form>
        </>
    );
}
