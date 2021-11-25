import PropTypes from 'prop-types';
import Link from 'next/link'

import StockInfo from '../listItem/StockInfo';

const StockInfos = ({list, href}) => {
  return (
    <div>
      {list.map(data => 
        <StockInfo 
          key={data.id} 
          name={data.name}
          price={data.price}
          open={data.open}
          timezone={data.timezone}
          location={data.location}
          changeRate={data.changeRate}
          changePrice={data.changePrice}
        />
      )}
      <Link href={href}>
        <a style={{display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', paddingTop: '2vw', color: 'white', textDecoration: 'none', fontSize: '0.8em'}}>
          {'더보기 ' + '>>'}
        </a>
      </Link>
    </div>
  );
}

StockInfos.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    timezone: PropTypes.string.isRequired,
    open: PropTypes.bool.isRequired,
    location: PropTypes.string.isRequired,
    changePrice: PropTypes.string.isRequired,
    changeRate: PropTypes.string.isRequired,
  })),
  href: PropTypes.string.isRequired,
}

export default StockInfos;