import Link from 'next/link';
import { useState } from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import { styled } from '@mui/material/styles';

import Container from '../container/Container';
import TopbarMenuInfo from '../listItem/TopbarMenuInfo';
import LoginButton from '../button/LoginButton';

import { Font } from '../styles/Font';
import { LogoColor } from '../styles/Color';

import { TopbarMenus } from '../../config/TopbarMenus'

const StyledTabs = styled((props) => {
  return (
  <Tabs
    {...props}
    TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
  />
)})({
  '& .MuiTabs-indicator': {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  '& .MuiTabs-indicatorSpan': {
    maxWidth: 40,
    width: '100%',
    backgroundColor: '#635ee7',
  },
});


const Topbar = ({isLogin, tabIndex}) => {
  const [value, setValue] = useState(tabIndex);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Container>
      <div style={{ display: 'flex', flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
        <Link href="/">
          <Font theme={{ fs: '1.5em', color: LogoColor }}>𝐴𝑠𝑠𝑒𝑡 𝐺𝑎𝑙𝑙𝑒𝑟𝑦</Font>
        </Link>
        <LoginButton isLogin={isLogin} />
      </div>
      {/* <StockSearch /> */}
      <StyledTabs 
          value={value} 
          onChange={handleChange} 
          style={{border: 'none'}}
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example">
          {TopbarMenus.map((menu) => 
            <TopbarMenuInfo key={menu.name} menu={menu} />
          )}
      </StyledTabs>
    </Container>
  )
}

Topbar.prototype = {
  isLogin: PropTypes.bool.isRequired,
}

export default Topbar;