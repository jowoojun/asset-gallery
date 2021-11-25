import Tab from '@mui/material/Tab';
import { useEffect } from 'react';

import useStockPriceColor from '../../hooks/useStockPriceColor'

import { Font } from '../styles/Font';

const NewsCardTickerInfo = ({ticker}) => {
  const priceColor = useStockPriceColor(ticker.changeRate);
  
  useEffect(() => {
    console.log(ticker)
  },[])

  return (
    <Tab
      key={ticker.symbol}
      component="a"
      onClick={(event) => { event.preventDefault(); }}
      style={{ alignItems: 'flex-start', }} 
      label={
        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
          <Font theme={{fs: '1em'}}>{ticker.symbol}</Font>
          <div style={{ marginLeft: '5px'}}/>
          <Font theme={{fs: '1em', color: priceColor }}>{ticker.changeRate}%</Font>
        </div>
      }
    />
  )
}
    
export default NewsCardTickerInfo;