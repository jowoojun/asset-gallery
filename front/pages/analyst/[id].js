import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import AppLayout from "../../components/presentation/AppLayout";
import StockList from '../../components/presentation/StockList';

import { LOAD_ANALYST_PORTFOLIO_REQUEST } from '../../reducers/analyst';

const Analyst = () => {
  const router = useRouter();
  const { id, title } = router.query;

  const { me } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const {
    analystInfo
  } = useSelector((state) => state.analyst);

  useEffect(() => {
    dispatch({ type: LOAD_ANALYST_PORTFOLIO_REQUEST, data: { id } });
  }, []);

  return (
    <AppLayout isLogin={me == null? false : true} tabIndex={0}>
      <StockList name={title} analystInfo={analystInfo} />
    </AppLayout>
  )
}

export default Analyst;