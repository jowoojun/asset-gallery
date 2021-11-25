import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Router from 'next/router'

import { Font } from "../components/styles/Font";
import AppLayout from "../components/presentation/AppLayout";
import StockDetail from '../components/presentation/StockDetail'

import { LOG_OUT_REQUEST } from '../reducers/user';

const Portfolios = () => {
  const { me } = useSelector((state) => state.user);

  useEffect(() => {
    if(!me){
      Router.push('/signin')
    }   
  }, []);
  
  return(
    <AppLayout isLogin={me == null? false : true} tabIndex={1}>
      <StockDetail symbol={"KRX:005930"}/>
    </AppLayout>
  );
}

export default Portfolios;