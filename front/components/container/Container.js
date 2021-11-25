import PropTypes from 'prop-types';

const Container = ({children}) => {
  return (
    <div style={{padding: '2.333vw'}}>
      {children}
    </div>
  )
}

Container.prototype = {
  children: PropTypes.node.isRequired,
}

export default Container;