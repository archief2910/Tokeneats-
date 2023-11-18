import { React, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Layout from '../../components/Layout/Layout'
import axios from 'axios';

const Register = () => {

    const [role, setRole] = useState("");
    const [name, setName] = useState("");
    const [roll, setroll] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(
                `${process.env.REACT_APP_API}/admin/signup`, { name, roll, email, password, role}
            );
            if (response.data.success) {
                alert("User Registered Successfully");
                navigate("/login");
            } else {
                alert("Failed to register");
            }
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <Layout title={"Register - TokenEats"}>
            <div className='form-container'>

                <form onSubmit={handleSubmit}>
                    <h2 className='title'>Register</h2>
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
                        <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="form-control" id="exampleInputEmail1" placeholder="Enter your name" required />
                    </div>
                    <div className="form-group">
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" id="exampleInputEmail1" placeholder="Enter your email" required />
                    </div>
                    <div className="form-group">
                        <input type="text" value={roll} onChange={(e) => setroll(e.target.value)} className="form-control" id="exampleInputEmail1" placeholder="Enter your roll no." required />
                    </div>
                    <div className="form-group">
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" id="exampleInputPassword1" placeholder="Password" />
                    </div>
                    <button type="submit" className="btn btn-primary">REGISTER</button>
                </form>

            </div>
        </Layout>
    )
}

export default Register