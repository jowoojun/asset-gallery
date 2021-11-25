import Link from 'next/link';
import PropTypes from 'prop-types';
import Clock from 'react-live-clock';
import { IoFlash, IoFlashOff } from 'react-icons/io5'

import useStockPriceColor from '../../hooks/useStockPriceColor';

import { Font } from '../styles/Font';

const topFontTheme = {
  fs: '1.2em'
}

const StockInfo = ({name, averagePrice, ticker, weight, currentPrice, changePrice, changeRate}) => {
  const priceColor = useStockPriceColor(changePrice);

  return (
    <Link href={"/stock/" + ticker}>
      <div style={{borderBottom: '1px solid #f2f2f2', padding: '8px'}}>
        <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '0.3em'}}>
          <Font theme={topFontTheme}>{name} ({ticker})</Font>
          <Font theme={topFontTheme}>{currentPrice}</Font>
        </div>
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
          <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: topFontTheme.fs}}>
            <Font>비중: {weight} | 평균 매입가: {averagePrice}</Font>
          </div>
          <div style={{display: 'flex', flexDirection: 'row'}}>
            <Font theme={{color: priceColor}}>{String(changePrice)}</Font>
            <Font theme={{color: priceColor}}>({String(changeRate)}%)</Font>
          </div>
        </div>
      </div>
    </Link>
  );
}

StockInfo.propTypes = {
  name: PropTypes.string.isRequired,
  averagePrice: PropTypes.string.isRequired,
  ticker: PropTypes.string.isRequired,
  weight: PropTypes.string.isRequired,
  currentPrice: PropTypes.number.isRequired,
  changePrice: PropTypes.string.isRequired,
  changeRate: PropTypes.string.isRequired,
}

export default StockInfo;