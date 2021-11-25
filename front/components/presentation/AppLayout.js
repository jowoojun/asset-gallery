import PropTypes from 'prop-types';

import Topbar from './Topbar';

const AppLayout = ({children, isLogin, tabIndex}) => {
  return (
    <div style={{ margin:0, padding: 0}}>
      <Topbar isLogin={isLogin} tabIndex={tabIndex}/>
      {children}
    </div>
  )
}

AppLayout.prototype = {
  children: PropTypes.node.isRequired,
  isLogin: PropTypes.bool.isRequired,
}

export default AppLayout;