import React from 'react';
import arrowRight from '../../../assets/icon/arrow_right.svg';
import sortSvg from '../../../assets/icon/sort.svg';
import { strings } from '../../../strings';
const { back, filter, whatToReview } = strings.fa;

const AnimationHeader = ({ setActionSheetIsOpen }) => {
  return (
    <div className="header">
      <div className="back">
        <img
          src={arrowRight}
          alt=""
        />
        {back}
      </div>
      <h2>{whatToReview}؟</h2>
      <div className="header_filter">
        <div>مناسب برای سن 3 تا 7 سال</div>
        <div
          onClick={() => setActionSheetIsOpen(true)}
          className="filter-container"
        >
          <img
            src={sortSvg}
            alt=""
          />
          {filter}
        </div>
      </div>
    </div>
  );
};

export default AnimationHeader;
