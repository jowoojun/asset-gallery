
import { AdvancedRealTimeChart } from "react-ts-tradingview-widgets";
import { SymbolInfo } from "react-ts-tradingview-widgets";
import { FundamentalData } from "react-ts-tradingview-widgets";
import { CompanyProfile } from "react-ts-tradingview-widgets";
import { Timeline } from "react-ts-tradingview-widgets";
import { TechnicalAnalysis } from "react-ts-tradingview-widgets";

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

const StockDetail = ({symbol}) => {
  return(
    <Box sx={{ flexGrow: 1 }}>
      <SymbolInfo width={'100%'} symbol={symbol} locale={'kr'} colorTheme="dark"></SymbolInfo>
      <AdvancedRealTimeChart width={'100%'} symbol={symbol} locale={'kr'} theme="dark"></AdvancedRealTimeChart>
      <Grid container style={{width: '100%'}}>
        <Grid item xs={12} sm={6} md={6}>
          <TechnicalAnalysis width={'100%'} symbol={symbol} locale={'kr'} colorTheme="dark"></TechnicalAnalysis>
          <CompanyProfile width={'100%'} symbol={symbol} locale={'kr'} theme="dark" ></CompanyProfile>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <FundamentalData width={'100%'} symbol={symbol} locale={'kr'} theme="dark" ></FundamentalData>
        </Grid>
      </Grid>
    </Box>
  )
}

export default StockDetail;
