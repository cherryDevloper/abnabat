import React from 'react';
import Card from '../../../components/Card';
import Footer from './AnimationCardFooter';

const AnimationList = ({ data, sortBy }) => {
  return (
    <div className="grid-container">
      {data.map((item, index) => {
        const {
          reviewsTitle,
          reviewsThumbnailUrl,
          reviewsRate,
          viewsCount,
          reviewsModifiedTime,
        } = item;
        const footer = (
          <Footer
            date={reviewsModifiedTime}
            reviewsRate={reviewsRate}
            viewsCount={viewsCount}
            sortBy={sortBy}
          />
        );
        return (
          <div
            className="column"
            key={index}
          >
            <Card
              footer={footer}
              image={reviewsThumbnailUrl}
              title={reviewsTitle}
              viewsCount={viewsCount}
            />
          </div>
        );
      })}
    </div>
  );
};

export default AnimationList;
