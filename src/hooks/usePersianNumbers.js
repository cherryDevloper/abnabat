import { useEffect, useState } from 'react';

const usePersianNumbers = (initialValue) => {
  const [persianNumber, setPersianNumber] = useState('');

  const convertToPersian = (number) => {
    const persianDigits = '۰۱۲۳۴۵۶۷۸۹';
    return String(number).replace(/\d/g, (digit) => persianDigits[digit]);
  };

  useEffect(() => {
    setPersianNumber(convertToPersian(initialValue));
  }, [initialValue]);

  return persianNumber;
};

export default usePersianNumbers;
