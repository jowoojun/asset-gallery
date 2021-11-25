import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Router from 'next/router'

import { Font } from "../components/styles/Font";
import AppLayout from "../components/presentation/AppLayout";

import { LOG_OUT_REQUEST } from '../reducers/user';

const List = () => {
  const { me, logOutLoading } = useSelector((state) => state.user);
  const dispatch = useDispatch()
  useEffect(() => {
    if(!me){
        Router.push('/')
    }
  }, [])

  const signOut = () => {
    if(!logOutLoading) 
      dispatch({ type: LOG_OUT_REQUEST });
  }

  return (
    <AppLayout isLogin={me == null? false : true}>
      <div style={{ marginTop: '3em', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
        <Font theme={{fs: '2.5em'}}>Sign In</Font>
        <div style={{ marginTop: '1em', width: '80%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
          <form>
            <button onClick={signOut}>로그아웃</button>
            <button>회원탈퇴</button>
          </form>
        </div>
      </div>  
    </AppLayout>
  )
}

export default List;