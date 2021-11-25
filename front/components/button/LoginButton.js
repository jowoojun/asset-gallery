import Link from 'next/link';
import PropTypes from 'prop-types';

import Button from '@mui/material/Button';
import { IoPersonCircleSharp } from 'react-icons/io5'

import { IconColor } from '../styles/Color';

const LoginButton = ({isLogin}) => {
  return (
    <div>
      {isLogin? 
        <Link href="/list">
          <a><IoPersonCircleSharp size={'2em'} color={IconColor} /></a>
        </Link>
      :
        <Link href="/signin">
          <Button variant="contained" style={{backgroundColor: 'black'}}>SIGN IN</Button>
        </Link>
      }
    </div>
  )
}

LoginButton.prototype = {
  isLogin: PropTypes.bool.isRequired,
}

export default LoginButton;