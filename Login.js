import { React, useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom';
import Layout from '../../components/Layout/Layout'
import axios from 'axios';
import { useAuth } from '../../context/auth';

const Login = () => {
    const [role, setRole] = useState("");

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [auth, setAuth] = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(
                `${process.env.REACT_APP_API}/admin/signin`, { email, password }
            );
            
            if (response.data.success) {
                setAuth({
                    ...auth,
                    user: response.data.user,
                    token: response.data.token,
                    role:role
                })
                localStorage.setItem("auth", JSON.stringify(response.data,{role:role}))
                navigate(location.state || "/");
            } else {
                alert("Login Failed");
            }
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <Layout title={"Login - TokenEats"}>
            <div className='form-container'>
                <form onSubmit={handleSubmit}>
                    <h2 className='title text-dark'>Login</h2>
                    <div className='d-flex mx-2'>
                        <h6 style={{ "color": "black" }}>Role</h6>
                        <div className=''>
                            &nbsp; <input type="radio" id="student"  name="role" value={role} onChange={(e) => setRole(e.target.value)} />
                            &nbsp; <label htmlFor="student" style={{ "color": "black" }}>Student</label><br />
                        </div>
                        <div className=''>
                            &nbsp; <input type="radio" id="vendor" name="role" value={role} onChange={(e) => setRole(e.target.value)} />
                            &nbsp; <label htmlFor="vendor" style={{ "color": "black" }}>Vendor</label><br />
                        </div>
                    </div>
                    <div className="form-group">
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" id="exampleInputEmail1" placeholder="Enter your email" required />
                    </div>
                    <div className="form-group">
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" id="exampleInputPassword1" placeholder="Password" />
                    </div>
                    <button type="submit" className="btn btn-primary">LOGIN</button>
                </form>

            </div>
        </Layout>
    )
}

export default Login