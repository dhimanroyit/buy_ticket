import React , {useState, useContext, useEffect} from 'react'
import { useParams } from 'react-router';
import { allProductData } from '../../fakeData/fakeData';
import './Destination.css';
import SearchDestination from './SearchDestination/SearchDestination';
import ResultItem from './ResultItem/ResultItem';
import loginContext from '../../context/loginContext';
import GoogleMap from '../GoogleMap/GoogleMap';

const Destination = () => {
  const {product} = useParams()
  const [searchResult, setSearchResult] = useState(null);
  const [searchValue, setSearchValue] = useState()
  const {setRootRoute} = useContext(loginContext);

  const searchHandler = (productKey) => {
    const searchData = allProductData.filter(product => product.title === productKey);
    setSearchResult(searchData);
  }

  useEffect(() => {
    setRootRoute(false);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="destination">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="search">
              {!searchResult ? <SearchDestination
                product={product}
                searchHandler={searchHandler}
                setSearchValue={setSearchValue} /> :

                  (
                    <>
                      {searchValue && <div className="search__area">
                        <p className="search__ariaTitle">{searchValue.pickfrom}</p>
                        <p className="search__ariaTitle">{searchValue.pickto}</p>
                      </div>}
                      {
                        searchResult.map(service => (
                          <ResultItem key={service.id} {...service} />
                        ))
                      }
                    </>
                  )
                  
                  
                  }
                    
              
            
            </div>
          </div>
          <div className="col-md-8">
            <div className="destination__map">
              <GoogleMap />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Destination
