import React, { useContext } from 'react'
import { Route, Redirect } from 'react-router-dom';
import loginContext from '../../context/loginContext';


const PrivateRoute = ({children, ...rest}) => {
  const { userLogin } = useContext(loginContext);
  return (
    <Route 
      {...rest}
      render={({location}) => 
        userLogin.login ? (
          children
          ) : <Redirect to={
            {
              pathname: "/login",
              state: {from: location}
            }
          } />
        }
      />
  )
}

export default PrivateRoute
