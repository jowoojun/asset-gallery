import { useState } from 'react';
import PropTypes from 'prop-types';

import { MarketData } from "react-ts-tradingview-widgets";
import { styled } from '@mui/material/styles';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

import Container from '../container/Container';
import CardContainer from '../container/CardContainer';

import { 
  SymbolIndicesGroups, 
  SymbolCommoditiesGroups, 
  SymbolBondsGroups,
  SymbolForexGroups
} from '../../config/MarketIndexData'

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

const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
  ({ theme }) => ({
    textTransform: 'none',
    marginRight: theme.spacing(1),
    minWidth: '2vw',
    color: 'rgba(255, 255, 255, 0.7)',
    '&.Mui-selected': {
      color: '#fff',
    },
    '&.Mui-focusVisible': {
      backgroundColor: 'rgba(100, 95, 228, 0.32)',
    },
  }),
);

const TabPanel = ((props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 2 }}>
          <div>{children}</div>
        </Box>
      )}
    </div>
  );
});

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

const MarketIndex = ({mainIndices}) => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Container>
      <CardContainer title={'주가 동향'}>
        <Box>
          <StyledTabs
            value={value}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons="auto"
            aria-label="scrollable auto tabs example"
          >
            <StyledTab label="지수" />
            <StyledTab label="환율" />
            <StyledTab label="파생상품" />
            <StyledTab label="채권" />
          </StyledTabs>
          
          <TabPanel value={value} index={0}>
            <MarketData symbolsGroups={SymbolIndicesGroups} locale={'kr'} colorTheme="dark" width="100%" height={400}></MarketData>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <MarketData symbolsGroups={SymbolForexGroups} locale={'kr'} colorTheme="dark" width="100%" height={400}></MarketData>
          </TabPanel>
          <TabPanel value={value} index={2}>
            <MarketData symbolsGroups={SymbolCommoditiesGroups} locale={'kr'} colorTheme="dark" width="100%" height={400}></MarketData>
          </TabPanel>
          <TabPanel value={value} index={3}>
            <MarketData symbolsGroups={SymbolBondsGroups} locale={'kr'} colorTheme="dark" width="100%" height={400}></MarketData>
          </TabPanel>
        </Box>
      </CardContainer>
    </Container>
  )
}

MarketIndex.propTypes = {
  mainIndices: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    timezone: PropTypes.string.isRequired,
    open: PropTypes.bool.isRequired,
    location: PropTypes.string.isRequired,
    changePrice: PropTypes.string.isRequired,
    changeRate: PropTypes.string.isRequired,
  })),
}

export default MarketIndex;