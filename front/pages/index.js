import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { TickerTape } from "react-ts-tradingview-widgets";
import AppLayout from "../components/presentation/AppLayout";
import MarketIndexCard from "../components/presentation/MarketIndexCard";
import PortfolioListCard from '../components/presentation/PortfolioListCard';
import HorizontalScrollingAvatarCard from '../components/presentation/HorizontalScrollingAvatarCard';


import axios from 'axios';
import wrapper from '../store/configureStore';
import { END } from 'redux-saga';
import { LOAD_MY_INFO_REQUEST } from '../reducers/user'
import { LOAD_INDICES_REQUEST } from '../reducers/stock';
import { LOAD_PORTFOLIOS_REQUEST } from '../reducers/portfolio';
import { LOAD_CREATOR_REQUEST } from '../reducers/creator';
import { LOAD_ANALYST_REQUEST } from '../reducers/analyst';

const Home = () => {
  const { me } = useSelector((state) => state.user);
  
  const dispatch = useDispatch();
  const { mainIndices } = useSelector((state) => state.stock);
  const { mainPortfolios } = useSelector((state) => state.portfolio);
  const { mainCreators } = useSelector((state) => state.creator);
  const { mainAnalysts } = useSelector((state) => state.analyst);
  
  useEffect(() => {
    dispatch({ type: LOAD_INDICES_REQUEST });
    dispatch({ type: LOAD_PORTFOLIOS_REQUEST });
    dispatch({ type: LOAD_CREATOR_REQUEST });
    dispatch({ type: LOAD_ANALYST_REQUEST });
  }, []);

  return (
    <AppLayout isLogin={me == null? false : true} tabIndex={0}>
      {/* <PortfolioListCard mainPortfolios={mainPortfolios} /> */}
      <MarketIndexCard mainIndices={mainIndices} />
      <div style={{padding: '2.333vw'}} >
        <TickerTape colorTheme="dark" locale={'kr'} />
      </div>
      <HorizontalScrollingAvatarCard title={'경제 유튜버 영상'} dataList={mainCreators} link={'/creator/'}/>
      <HorizontalScrollingAvatarCard title={'유명 투자자들의 포트폴리오'} dataList={mainAnalysts} link={'/analyst/'}/>
      <div style={{marginBottom: '20px'}} />
    </AppLayout>
  )
}


export const getServerSideProps = wrapper.getServerSideProps((store) => async ({ req, res, ...etc }) => {
  const cookie = req ? req.headers.cookie : '';
  axios.defaults.headers.Cookie = '';
  if (req && cookie) {
    axios.defaults.headers.Cookie = cookie;
  }
  store.dispatch({
    type: LOAD_MY_INFO_REQUEST,
  });
  store.dispatch({ 
    type: LOAD_INDICES_REQUEST
  });
  store.dispatch({ 
    type: LOAD_PORTFOLIOS_REQUEST 
  });
  store.dispatch({ 
    type: LOAD_CREATOR_REQUEST 
  });
  store.dispatch({ 
    type: LOAD_ANALYST_REQUEST 
  });
  store.dispatch(END);
  await store.sagaTask.toPromise();
});

export default Home;