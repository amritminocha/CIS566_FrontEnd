import { useState } from "react";
import './index.css';

const LoginForm = ({ title, onSubmit, errors, type }) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');

    const onChangeInput = e =>{
        if(e.target.name==="email"){
            setEmail(e.target.value);
        }
        if(e.target.name==="password"){
            setPassword(e.target.value);
        }
        if(e.target.name==="name"){
            setName(e.target.value);
        }
    };

    return (
        <div className="loginform">
            <h1 className="loginform_title">{title}</h1>
            {type==='signup' && <div className="loginform_inputbox">
                <input name="name" type="text" placeholder="Name" value={name} onChange={onChangeInput}></input>
                <div className="loginform_error">{errors.name}</div>
            </div>}
            <div className="loginform_inputbox">
                <input name="email" type="email" placeholder="Email" value={email} onChange={onChangeInput}></input>
                <div className="loginform_error">{errors.email}</div>
            </div>
            <div className="loginform_inputbox">
                <input name="password" type="password" placeholder="Password" value={password} onChange={onChangeInput}></input>
                <div className="loginform_error">{errors.password}</div>
            </div>
            <div className="loginform_inputbox">
                <button className="loginform_button" onClick={()=>{onSubmit(email, password, name)}}>{title}</button>
            </div>
        </div>
    );
};

export default LoginForm;