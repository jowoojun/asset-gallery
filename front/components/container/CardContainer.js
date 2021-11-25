import PropTypes from 'prop-types';

import { CardColor } from '../styles/Color';
import { Font } from '../styles/Font';

const CardContainer = ({children, title}) => {
  return (
    <>
      <div style={{ padding: '10px'}}>
        <Font theme={{fs: '1.2em'}}>{title}</Font>
      </div>
      <section style={{ 'backgroundColor': CardColor, 'borderRadius': '10px' }}>
        <div style={{ 'margin': 0, 'padding': '0',}}>
          {children}
        </div>
      </section>
    </>
  )
}

CardContainer.prototype = {
  children: PropTypes.node.isRequired,
}

export default CardContainer;