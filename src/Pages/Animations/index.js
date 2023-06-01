import React, { useEffect, useMemo, useState } from 'react';
import { getReviwesCategory } from '../../services/DataAction/ReveiwsCategory';
import { strings } from '../../strings';
import ActionSheet from '../../components/ActionSheet';
import AnimationList from './components/AnimationList';
import Spinner from '../../components/Spinner.js';
import AnimationHeader from './components/AnimationHeader';
import Alert from '../../components/Alert';
import './Animation.css';

const { most, latest, view, score } = strings.fa;

const Animations = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [hasMoreData, setHasMoreData] = useState(true);
  const [actionSheetIsOpen, setActionSheetIsOpen] = useState(false);
  const [sortBy, setSortBy] = useState('');

  const fetchAnimations = async () => {
    try {
      const response = await getReviwesCategory({ page, sortby: sortBy });
      const filterReviewAgeCategory = response.data.data.filter(
        (item) => item.reviewsAgeCategory >= 3 && item.reviewsAgeCategory <= 7
      );

      setData((prevData) => [...prevData, ...filterReviewAgeCategory]);
      setPage((prevPage) => prevPage + 1);
      setHasMoreData(filterReviewAgeCategory.length > 0);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };
  const handleSortBy = (sortBy) => {
    setSortBy(sortBy);
    setData([]);
    setPage(1);
    setHasMoreData(true);
    setActionSheetIsOpen(false);
  };
  const actions = [
    {
      id: 0,
      label: latest,
      onClick: () => {
        handleSortBy('newest');
      },
    },
    {
      id: 1,
      label: most + view,
      onClick: () => {
        handleSortBy('view');
      },
    },
    {
      id: 2,
      label: most + score,
      onClick: () => {
        handleSortBy('rate');
      },
    },
  ];
  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop >=
        document.documentElement.offsetHeight &&
      hasMoreData &&
      !loading
    ) {
      fetchAnimations();
    }
  };

  useMemo(() => {
    fetchAnimations();
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [sortBy]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [page, hasMoreData]);

  if (error) {
    return (
      <div>
        <Alert message={error.message} />
      </div>
    );
  }
  const filteredData = data.reduce((accumulator, item) => {
    if (!accumulator.find((existingItem) => existingItem.id === item.id)) {
      accumulator.push(item);
    }
    return accumulator;
  }, []);

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <AnimationHeader setActionSheetIsOpen={setActionSheetIsOpen} />

          <AnimationList
            data={filteredData}
            sortBy={sortBy}
          />
          <ActionSheet
            setIsOpen={setActionSheetIsOpen}
            actions={actions}
            isOpen={actionSheetIsOpen}
          />
        </>
      )}
    </>
  );
};

export default Animations;
