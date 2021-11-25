import { useDispatch, useSelector } from 'react-redux';
import Router from 'next/router'
import {
  FacebookLoginButton,
  GoogleLoginButton,
} from 'react-social-login-buttons';

import { Font } from "../components/styles/Font";
import AppLayout from "../components/presentation/AppLayout";
import { useEffect } from 'react';
import { backendURL } from '../config/config';

const SignIn = () => {
  const { me } = useSelector((state) => state.user);
  useEffect(() => {
    if(me){
        Router.push('/')
    }
  }, [])
  const googleSignInClick = () => {
    window.open(backendURL + '/auth/google', '_self');
  };
  const facebookSignInClick = () => {
    window.open(backendURL + '/auth/facebook', '_self');
  };

  return (
    <AppLayout isLogin={me == null? false : true}>
      <div style={{ marginTop: '3em', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
        <Font theme={{fs: '2.5em'}}>Sign In</Font>
        <div style={{ marginTop: '1em', width: '80%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
          <form>
            <GoogleLoginButton 
              onClick={googleSignInClick}
            />
            {/* <FacebookLoginButton 
              onClick={facebookSignInClick}
            /> */}
          </form>
        </div>
      </div>  
    </AppLayout>
  )
}

export default SignIn;