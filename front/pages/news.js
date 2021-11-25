import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import AppLayout from "../components/presentation/AppLayout";
import VerticalInfiniteScrollList from '../components/presentation/VerticalInfiniteScrollList'

import axios from 'axios';
import wrapper from '../store/configureStore';
import { END } from 'redux-saga';

import { NEWSLIMIT } from '../config/config'
import { LOAD_NEWS_REQUEST } from '../reducers/news'

const SignIn = () => {
  const dispatch = useDispatch();
  const { me } = useSelector((state) => state.user);
  const { 
    mainNews, loadNewsLoading, hasMoreNews
  } = useSelector((state) => state.news);
  const nextId = useRef(1);

  useEffect(() => {
    function onScroll() {
      const screen = document.documentElement;
      if (window.scrollY + screen.clientHeight > screen.scrollHeight - 400) {
        if (hasMoreNews && !loadNewsLoading) {
          nextId.current += 1;
          dispatch({
            type: LOAD_NEWS_REQUEST,
            data: {
              pageSize: NEWSLIMIT,
              page: nextId.current,
            }
          });
        }
      }
    }
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [loadNewsLoading, hasMoreNews]);

  return (
    <AppLayout isLogin={me == null? false : true} tabIndex={1}>
      <VerticalInfiniteScrollList title={'주요 뉴스'} dataList={mainNews} />
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
    type: LOAD_NEWS_REQUEST,
    data: {
      pageSize: NEWSLIMIT,
      page: 1,
    }
  });
  store.dispatch(END);
  await store.sagaTask.toPromise();
});

export default SignIn;