import { useContext } from 'react';
import './Login.css'
import ThemeContext from '../../assets/contexts/themeContext';
import { useNavigate } from 'react-router-dom';

const Login = () =>{


    const themeContext = useContext(ThemeContext);

    const navigate = useNavigate();

    const onClick = () =>{

        const userName = document.getElementById('userName-input').value;
        const password = document.getElementById('password-input').value;

        fetch(themeContext.APIURL+'user/login',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body: JSON.stringify({userName,password}),
            mode:'cors'
        }).then(res => { return res.json()
        }).then(res =>{

            if(res.ok === true){
                console.log(res);
                themeContext.setToken(res.token);
                navigate('/');
            }
        })
    };

    return (
            <div className='login-container'>
                <div className='login-box'>
                    <h3 className='login-title'>login</h3>
                    <div className='user-input-container'>
                        <label className='login-label'>usuario:</label><input type='text' id='userName-input'></input>
                    </div>
                    <div className='password-input-container'>
                        <label className='login-label'>contraseña:</label><input type='password' id = 'password-input'></input>
                    </div>
                    <div className='login-button-container'>
                        <button className='login-button' type='submit' onClick={onClick}>ingresar</button>
                    </div>
                </div>
            </div>
    );
}


export default Login;