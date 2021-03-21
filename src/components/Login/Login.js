import React, {useContext} from 'react';
import 'firebase/auth';
import { Link, useHistory, useLocation } from 'react-router-dom';
import ButtonAuth from '../ButtonAuth/ButtonAuth';
import { faGoogle } from '@fortawesome/free-brands-svg-icons'
import { useForm } from 'react-hook-form';
import loginContext from '../../context/loginContext';
import { googleLogin, loginUserWithEmailPass } from '../../firebase/loginManager';


const Login = () => {
  const {register, handleSubmit, errors} = useForm();
  const {setUserLogin} = useContext(loginContext);
  const history = useHistory();
  const location = useLocation()
  const {from} = location.state || {from: {pathname: "/"}};

  const googleLoginHandler = () => {
    googleLogin()
      .then(res=> {
        const {displayName, email, photoURL} = res.user;
        const user = {
          login: true,
          name: displayName,
          email,
          photo: photoURL,
        }
        setUserLogin(user)
        history.replace(from);
      })
  }

  const onSubmit = (data) => {
    console.log(data);
    loginUserWithEmailPass(data.email, data.password)
      .then(res => {
        console.log('dkad', res);
        const {email} = res.user;
        const user = {
          login: true, 
          email,
        }
        setUserLogin(user)
        history.replace(from);
      })
  }

  return (
    <div className="signup">
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <div className="login">
              <h1 className="login__title">Login</h1>
              <form action="" onSubmit={handleSubmit(onSubmit)} className="login__form">
                <div className="login__inputGroup">
                  <input 
                    ref={register({ required: true})} 
                    type="email" 
                    name="email" 
                    className="login__input" 
                    placeholder="Email"/>
                  {errors.email && <p className="login__inputError">Your input is required</p>}
                </div>
                <div className="login__inputGroup">
                  <input 
                    ref={register({ required: true, minLength: 6})} 
                    type="password" 
                    name="password" 
                    className="login__input" 
                    placeholder="Password"
                    autoComplete="current-password" />
                  {errors.password?.type === "required" && <p className="login__inputError">Your input is required</p>}
                  {errors.password?.type === "minLength" && <p className="login__inputError">Your input limit min length 6</p>}
                </div>
                <div className="login__checkboxGroup">
                  <label htmlFor="Remember">
                  <input 
                    type="checkbox" 
                    ref={register} 
                    id="Remember" 
                    name="Remember" 
                    value={true} /> Remember Me
                  </label>
                  <Link className="login__switchLink" to="/forgetpassword">Forgot Password</Link>
                </div>
                <button type="submit" className="login__button">Login</button>
              </form>
              <p className="login__switch">
                Don’t have an account? 
                <Link className="login__switchLink" to="/signup"> Create an account</Link></p>
              
            </div>
            <div className="loginAuth">
              <div className="loginAuth__divider">Or</div>
              <ButtonAuth clicked={googleLoginHandler} icon={faGoogle}>Continue with Google</ButtonAuth>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
