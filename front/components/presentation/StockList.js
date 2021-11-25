import Container from '../container/Container';
import CardContainer from '../container/CardContainer';
import StockInfo from '../listItem/StockInfo';
import Tailspin from '../loading/Tailspin';

const StockList = ({name, analystInfo}) => {
  return (
    <Container>
      <CardContainer title={name + '의 포트폴리오'}>
        {analystInfo.Celebrities? analystInfo.Celebrities.map((stock) => 
          <StockInfo 
            key={stock.ticker} 
            name={stock.name} 
            ticker={stock.ticker}
            weight={stock.weight}
            averagePrice={stock.averagePrice} 
            currentPrice={stock.current? stock.current.price : '?'}
            changeRate={stock.current? stock.current.percent : '?'}
            changePrice={stock.current? stock.current.change : '?'}
          />
        )
      : 
        <Tailspin />
      }
      </CardContainer>
    </Container>
  )
}

export default StockList;