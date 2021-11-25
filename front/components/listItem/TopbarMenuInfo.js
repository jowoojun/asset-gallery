import PropTypes from 'prop-types';
import Tab from '@mui/material/Tab';
import Link from 'next/link';

import { Font } from '../styles/Font';

const TopbarMenuInfo = ({menu}, props) => {
  return (
    <Tab
      component="a"
      onClick={(event) => { event.preventDefault(); }}
      style={{ }} 
      label={
        <div>
          <Link href={menu.href}>
            
              <Font>{menu.name}</Font>
            
          </Link>
        </div>
      }
      {...props}
    />
  );
}

TopbarMenuInfo.propTypes = {
  menu: PropTypes.shape({
    name: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired
  }),
}

export default TopbarMenuInfo;