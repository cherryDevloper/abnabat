import api from '../../AxiosConfig';

export const getReviwesCategory = (params) => {
  return api.get(`/reviews-category/animations`, { params });
};
