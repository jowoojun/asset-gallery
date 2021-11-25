import { useState, useEffect } from 'react';

const useStockPriceColor = (initValue = null) => {
  const [priceColor, setPriceColor] = useState('#0d9d00');

  useEffect(() => {
    let NumPriceColor = Number(initValue);
    if(NumPriceColor > 0) {
      setPriceColor('rgb(255, 60, 60)')
    } else if(NumPriceColor < 0) {
      setPriceColor('#0082e5')
    } else {
      setPriceColor('#0d9d00')
    }
  }, [initValue]);

  return priceColor;
}

export default useStockPriceColor;