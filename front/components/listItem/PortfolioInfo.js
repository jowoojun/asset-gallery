import PropTypes from 'prop-types';
import Tab from '@mui/material/Tab';

import useStockPriceColor from '../../hooks/useStockPriceColor';

import { Font } from '../styles/Font';

const PortfolioInfo = ({portfolio}, props) => {
  const dayRateColor = useStockPriceColor(portfolio.changeRateDay);
  const totalRateColor = useStockPriceColor(portfolio.changeRateTotal);

  return (
    <Tab
      component="a"
      onClick={(event) => { event.preventDefault(); }}
      style={{width: '50%', alignItems: 'flex-start', }} 
      label={
        <div style={{ width: '100%', display: 'flex', flexDirection: 'column'}}>
          <div style={{display: 'flex', justifyContent: 'space-between'}}>
            <Font theme={{fs: '1.3em'}}>{portfolio.name}</Font>
            <Font />
          </div>
          <div style={{display: 'flex', justifyContent: 'space-between'}}>
            <Font>{'일일 손익'}</Font>
            <Font theme={{color: dayRateColor}}>{portfolio.changeRateDay}%</Font>
          </div>
          <div style={{display: 'flex', justifyContent: 'space-between'}}>
            <Font>{'미청산 손익'}</Font>
            <Font theme={{color: totalRateColor}}>{portfolio.changeRateTotal}%</Font>
          </div>
        </div>
      }
      {...props}
    />
  );
}

PortfolioInfo.propTypes = {
  portfolio: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    changeRateDay: PropTypes.string.isRequired,
    changeRateTotal: PropTypes.string.isRequired
  }),
}

export default PortfolioInfo;