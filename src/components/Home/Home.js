import React, {useEffect, useContext} from 'react'
import loginContext from '../../context/loginContext';
import Products from '../Products/Products';


const Home = () => {
  const {setRootRoute} = useContext(loginContext);

  useEffect(() => {
    setRootRoute(true);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <div className="home">
      <Products />
    </div>
  )
}

export default Home
