import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import axios from 'axios';
import wrapper from '../../store/configureStore';
import { END } from 'redux-saga';

import AppLayout from "../../components/presentation/AppLayout";
import VerticalInfiniteScrollList from '../../components/presentation/VerticalInfiniteScrollList';

import { LOAD_VIDEO_REQUEST } from '../../reducers/creator';
import { VIDEOSLIMIT } from '../../config/config';

const Creator = () => {
  const router = useRouter();
  const { id, title } = router.query;
  const { me } = useSelector((state) => state.user);

  const dispatch = useDispatch();
  const {
    mainVideos, hasMoreVideos, loadVideoLoading, nextVideoListToken
  } = useSelector((state) => state.creator);

  useEffect(() => {
    function onScroll() {
      const screen = document.documentElement;
      if (window.scrollY + screen.clientHeight > screen.scrollHeight - 400) {
        if (hasMoreVideos && !loadVideoLoading) {
          dispatch({
            type: LOAD_VIDEO_REQUEST,
            data: {
              id,
              pageToken: nextVideoListToken,
              limit: VIDEOSLIMIT,
            },
          });
        }
      }
    }
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [hasMoreVideos, loadVideoLoading]);

  return (
    <AppLayout isLogin={me == null? false : true} tabIndex={0}>
      <VerticalInfiniteScrollList title={title} dataList={mainVideos} />
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
    type: LOAD_VIDEO_REQUEST,
    data: {
      id: etc.params.id,
      limit: VIDEOSLIMIT,
      pageToken: null,
    },
  });
  store.dispatch(END);
  await store.sagaTask.toPromise();
});

export default Creator;