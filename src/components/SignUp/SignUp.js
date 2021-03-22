import React, {useContext, useState, useEffect} from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import ButtonAuth from '../ButtonAuth/ButtonAuth';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import loginContext from '../../context/loginContext';
import { useForm } from 'react-hook-form';
import { googleLogin, createUserWithEmailPass } from '../../firebase/loginManager';

const SignUp = () => {
  const [accountSuccess, setAccountSuccess] = useState(false)
  const history = useHistory();
  const location = useLocation()
  const {from} = location.state || {from: {pathname: "/"}};
  const {register, handleSubmit, errors} = useForm();
  const {setUserLogin, setRootRoute} = useContext(loginContext);
  const onSubmit = (data) => {
    createUserWithEmailPass(data)
      .then(res => {
        setAccountSuccess(true);        
      })
  }



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

  useEffect(() => {
    setRootRoute(false);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="signup">
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <div className="login">
              <h1 className="login__title">Create an account</h1>
              <form action="" onSubmit={handleSubmit(onSubmit)} className="login__form">
                <div className="login__inputGroup">
                  <input 
                    type="text" 
                    name="name" 
                    ref={register({required: true})} 
                    className="login__input" 
                    placeholder="Name" />
                  {errors.name && <p className="login__inputError">Your input is required</p>}
                </div>
                <div className="login__inputGroup">
                  <input 
                    type="email" 
                    name="email" 
                    ref={register({required: true})} 
                    className="login__input" 
                    placeholder="Username or Email"/>
                  {errors.email && <p className="login__inputError">Your input is required</p>}
                </div>
                <div className="login__inputGroup">
                  <input 
                    type="password" 
                    name="password" 
                    ref={register({required: true, minLength: 6})} 
                    className="login__input" 
                    placeholder="Password" />
                  {errors.password?.type === "required" && <p className="login__inputError">Your input is required</p>}
                  {errors.password?.type === "minLength" && <p className="login__inputError">Your input limit min length 6</p>}
                </div>
                <div className="login__inputGroup">
                  <input 
                    type="password" 
                    name="confirmPassword" 
                    ref={register({required: true, minLength: 6})} 
                    className="login__input" 
                    placeholder="Confirm Password" />
                  {errors.confirmPassword?.type === "required" && <p className="login__inputError">Your input is required</p>}
                  {errors.confirmPassword?.type === "minLength" && <p className="login__inputError">Your input limit min length 6</p>}
                </div>
                <button className="login__button">Create an Account</button>
              </form>
              {accountSuccess && <p style={{color: "green"}}>Account Created Successfully</p>}
              <p className="login__switch">
                Already have an account?  
                <Link className="login__switchLink" to="/login"> Login</Link>
              </p>
              
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

export default SignUp;
