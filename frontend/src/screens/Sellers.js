import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';
import { listProducts } from '../actions/productActions';
import { listDocprofiles } from '../actions/docprofileActions';

import { listLostpets } from '../actions/lostpetActions';

import MessageBox from '../components/MessageBox';
import LoadingBox from '../components/LoadingBox';
import { listTopSellers } from '../actions/userActions';




function Seller() {
  const productList = useSelector((state) => state.productList);
  const lostpetList = useSelector((state) => state.lostpetList);
  const docprofileList = useSelector((state) => state.docprofileList);


 

  
  const userTopSellers = useSelector((state) => state.userTopSellers);
  const {
    sellers,
    loading: loadingSellers,
    error: errorSellers,
  } = userTopSellers;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listLostpets({ feaured: true }));

    dispatch(listProducts({ feaured: true }));
    dispatch(listDocprofiles({ feaured: true }));

    dispatch(listTopSellers());

    return () => {
      //
    };
  }, [dispatch]);
  return (
    <div>
      <div className="welcome" >
      <h1 > Welcome to Sellers Screen </h1>
      </div>
      
     

        
        
      
        {loadingSellers ? (
        <LoadingBox />
      ) : errorSellers ? (
        <MessageBox variant="danger">{errorSellers}</MessageBox>
      ) : (
        <>
          {sellers.length === 0 && <MessageBox>No Seller Found</MessageBox>}
          <Carousel>
            {sellers.map((user) => (
              <div key={user._id}>
                <Link to={`/seller/${user._id}`}>
                  <img src={user.seller.logo} alt={user.seller.name} />
                  <p className="legend">{user.seller.name}</p>
                </Link>
              </div>
            ))}
          </Carousel>
        </>
      )}
      
      
      <h1>Seller</h1>
      {loadingSellers ? (
        <LoadingBox />
      ) : errorSellers ? (
        <MessageBox variant="danger">{errorSellers}</MessageBox>
      ) : (
        <>
          {sellers.length === 0 && <MessageBox>No Seller Found</MessageBox>}
          
            {sellers.map((user) => (
              <div key={user._id}>
                <Link to={`/seller/${user._id}`}>
                  <h2>{user.seller.name}</h2>
                </Link>
              </div>
            ))}
          
        </>
      )}
    </div>

  );
}
export default Seller;
