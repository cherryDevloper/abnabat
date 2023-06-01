import reviewStar from '../../../assets/icon/reviewStar.svg';
import usePersianNumbers from '../../../hooks/usePersianNumbers';
import { strings } from '../../../strings';

const currentDate = new Date();
const currentYear = currentDate.getFullYear();

const { number, view, product } = strings.fa;

const Footer = ({ reviewsRate, viewsCount, sortBy }) => {
  const persianReviewsRate = usePersianNumbers(reviewsRate);
  const persianViewsCount = usePersianNumbers(viewsCount);
  const persianCurrentYear = usePersianNumbers(currentYear);
  //view//rate//newest
  if (sortBy === 'newest') {
    return `${product} ${persianCurrentYear}`;
  } else if (sortBy === 'rate') {
    return (
      <>
        <img
          src={reviewStar}
          alt="star"
        />
        {persianReviewsRate}
      </>
    );
  } else if (sortBy === 'view') {
    return (
      <>
        {number} {view} {persianViewsCount}
      </>
    );
  } else {
    return (
      <>
        <img
          src={reviewStar}
          alt="star"
        />
        {persianReviewsRate}
      </>
    );
  }
};
export default Footer;
