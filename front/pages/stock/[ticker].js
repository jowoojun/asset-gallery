import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';

import AppLayout from "../../components/presentation/AppLayout";
import StockDetail from '../../components/presentation/StockDetail'

const Portfolios = () => {
  const router = useRouter();
  const { ticker } = router.query;
  const { me } = useSelector((state) => state.user);
  
  return(
    <AppLayout isLogin={me == null? false : true} tabIndex={0}>
      <StockDetail symbol={ticker}/>
    </AppLayout>
  );
}

export default Portfolios;