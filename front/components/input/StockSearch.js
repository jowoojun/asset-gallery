import styled from 'styled-components';
import PropTypes from 'prop-types';

const SearchInput = styled.input`
  display: block;
  padding: 2.67vw;
  width: 90vw;
  font-size: 4vw;
`;

const StockSearch = () => {
  return (
    <section style={{ display: 'flex', marginTop: '1vw', marginBottom: '1vw', justifyContent: 'center'}}>
      <SearchInput placeholder="종목명을 검색해주세요." />
    </section>
  )
}

StockSearch.propTypes = {

}

export default StockSearch;