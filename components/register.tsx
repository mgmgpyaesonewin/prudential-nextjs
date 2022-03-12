import { NextPage } from "next";
import { useState } from "react";

const Register: NextPage = () => {
    const [form, setForm] = useState({
        name: '',
        phoneNumber: '',
        dob: '',
        gender: '',
    });
    
    const [errors, setErrors] = useState({
        name: '',
        phoneNumber: '',
        dob: '',
        gender: '',
    });
    
    const [isLoading, setIsLoading] = useState(false);
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };
    
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            await register(form);
            setIsLoading(false);
        } catch (err) {
            setErrors(err.errors);
            setIsLoading(false);
        }
    };
    
    return (
        <div className="container">
        <div className="columns">
            <div className="column is-half is-offset-one-quarter">
            <h1 className="title">registeration</h1>
            <form onSubmit={handleSubmit}>
                <div className="field">
                <label className="label">Username</label>
                <div className="control has-icons-left has-icons-right">
                    <input
                    className={`input ${errors.name && 'is-danger'}`}
                    type="text"
                    placeholder="Username"
                    name="username"
                    value={form.name}
                    onChange={handleChange}
                    />
                    <span className="icon is-small is-left">
                    <i className="fas fa-user"></i>
                    </span>
                    <span className="icon is-small is-right">
                    <i className="fas fa-check"></i>
                    </span>
                </div>
                { errors.username && 
                    <p className="help is-danger">{errors.username}</p> }
                </div>
                </form>
                </div>
            </div>
        </div>              
    );
};

export default Register;